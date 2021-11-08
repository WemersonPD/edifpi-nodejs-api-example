const express = require('express');
const morgan = require('morgan');

const app = express();
const routes = require('./controllers');
const { sequelize } = require('./db/models');

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', routes);
require('./db/repository/products.repository');

sequelize
  .authenticate()
  .catch((error) => console.log("Error in start db", error))

module.exports = app;