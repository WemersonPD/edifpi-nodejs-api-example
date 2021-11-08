const express = require('express');
const morgan = require('morgan');

const app = express();
const routes = require('./controllers')

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', routes);

module.exports = app;