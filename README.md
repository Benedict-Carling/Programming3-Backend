# Programming3-Backend

Express.js based BackEnd to communicate with MongoDB.

## Hosting

You can currently access the website backend following this link: https://programmingbackend3.herokuapp.com/

## UnitTests

Instead of Travis CI, we used the local GitHub workflows pipeline to automatically test our unit tests on each pull request made into the main branch, as well as the main branch itself. You can see below the status of the current main branch.

![UnitTests](https://github.com/Benedict-Carling/Programming3-Backend/workflows/UnitTests/badge.svg)

The workflow initiator file can be seen within the `.github/workflows/` folder and the unit tests themselves can be found within `/test` folder

## Code Formatting

Our repo uses prettier code formatting, and enforces pull requests and commits pass prettier code formatting checks, the current code formatting status on the main branch is

![CodeFormatting](https://github.com/Benedict-Carling/Programming3-Backend/workflows/CodeFormatting/badge.svg)

To check if you code is prettier compliant run the command

```bash
$ npx prettier --check .
```

To allow prettier to rewrite your code to be prettier compliant run:

```bash
$ npx prettier --write .
```

## Installation

Please install [node.js] (https://nodejs.org/en/download/current/) and [git] (https://git-scm.com/download/win)

Git clone the project from: https://github.com/Benedict-Carling/Programming3-Backend.git or by using the terminal:

```bash
git clone https://github.com/Benedict-Carling/Programming3-Backend.git
```

To update and install relevant packages use the terminal inside root of the project:

```bash
npm install
```

.env file has to be made inside the root of the project containing the MongoDB connection string and authentication information. Please contact us if you believe you should have access to this.

## Usage

To establish connection with MongoDB and locally host the BackEnd, use terminal inside root of the project to type:

```bash
node index.js
```
