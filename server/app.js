//use modules
const express = require('express');
const mongoose = require('mongoose');

//use config file
const config = require('./utils/config');

//require url router
const urlRouter = require('./controllers/urlRouter');

//create app
const app = express();

console.log(`connecting to ${config.MONGO_URI}`);

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) =>
    console.error('error connecting to MongoDB:', error.message)
  );

app.use(express.text({ type: '*/*' }));

app.use('/r', urlRouter);

module.exports = app;
