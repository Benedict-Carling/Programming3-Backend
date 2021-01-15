# Programming3-Backend

Express.js based BackEnd to communicate with MongoDB.

## UnitTests

Instead of Travis CI we used the local github workflows pipeline to automatically test unit test on each pull request into the main branch as well as the main branch itself, you can see below the status of the current main branch.

![Github Workflow Status CI](https://github.com/Benedict-Carling/Programming3-Backend/workflows/Node.js%20CI/badge.svg)

The workflow initiator file can be seen within the `.github/workflows/` folder and the unit tests themselves can be found within `src/__tests__` folder


## Installation

Please install [node.js] (https://nodejs.org/en/download/current/) and [git] (https://git-scm.com/download/win) 

Gitclone the project from: https://github.com/Benedict-Carling/Programming3-Backend.git

Update and install relevant packages using the terminal inside root of the project:

```bash
npm install
```

.env file has to be made inside the root of the project containing MongoDB connection string and authentication information. Please contact us if you believe you should have access to this.

## Usage

To establish connection with MongoDB and locally host the BackEnd,  use terminal inside root of the project to type:

```bash
node Index.js
```
