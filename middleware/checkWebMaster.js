const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const checkWebMaster = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return response.status(401).json({msg: "No authentication token, authentication denied"})

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified)
            return response.status(401).json({msg: "Token verification failed, authentication denied"})
        const sourceAccount = await User.findOne({ _id: verified.id })
        req.sourceAccount = sourceAccount
        next()
    } catch(err) {
        res.status(501).json({error: err.message})
    }

}

module.exports = checkWebMaster;