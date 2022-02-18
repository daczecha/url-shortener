const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  url: String,
  code: String,
});

module.exports = mongoose.model('Url', urlSchema);
