const { response } = require("express");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return response
        .status(401)
        .json({ msg: "No authentication token, authentication denied" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return response
        .status(401)
        .json({ msg: "Token verification failed, authentication denied" });

    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
