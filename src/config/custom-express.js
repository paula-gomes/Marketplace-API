/*
 * Express setup file
    - Intializes Express
    - Add the middlewares to it
*/

// Express require
const express = require('express');

// Middlewares requires
const bodyParser = require('body-parser');

// Express initialization
const app = express();

// Middlewares addition
app.use(bodyParser.json());

// Application export to server.js
module.exports = app;