const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (request, response) => response.status(200).send({
  message: "Hello world."
}));

module.exports = app;
