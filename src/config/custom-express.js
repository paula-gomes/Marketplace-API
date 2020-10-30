/*
 * Express setup file
    - Intializes Express
    - Add the middlewares to it
*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares addition
app.use(cors());
app.use(bodyParser.json());

// Application export to server.js
module.exports = app;