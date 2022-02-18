const randomstring = require('randomstring');
const Url = require('../models/Url');

const urlRouter = require('express').Router();

urlRouter.get('/:code', async (request, response) => {
  const code = request.params.code;
  const result = await Url.findOne({ code });
  response.redirect(`http://${result.url}`);
});

urlRouter.post('/', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  let url;
  if (request.body) {
    url = request.body;
  } else return response.status(404).send({ error: 'please input url' });

  const code = randomstring.generate(7);
  const obj = { url, code };
  const newUrl = new Url(obj);
  await newUrl.save();
  response.status(200).send(obj);
});

module.exports = urlRouter;
