//use modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

const buildPath = path.resolve(__dirname, '../client/build');

app.use(express.static(buildPath));
app.use(express.text({ type: '*/*' }));

app.use('/r', urlRouter);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(buildPath, 'index.html'));
});

module.exports = app;
