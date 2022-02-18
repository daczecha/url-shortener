const randomstring = require('randomstring');
const Url = require('../models/Url');

const urlRouter = require('express').Router();

urlRouter.get('/:code', (request, response) => {
  const code = request.params.code;
  const result = Url.findOne({ code });
  response.redirect(result.url);
});

urlRouter.post('/', async (request, response) => {
  const url = request.body;
  const code = randomstring.generate(7);
  const obj = { url, code };
  await Url.insertOne(obj);
  response.send(obj);
});

module.exports = urlRouter;
