//use http module
const http = require('http');

//require app file
const app = require('./app');

//require config file
const config = require('./utils/config');

//create server
const server = http.createServer(app);

//listen server to configured port
server.listen(process.env.PORT || config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
