const path = require('path');

const SERVER_PORT = 8080;

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT,
};
console.log(SERVER_CONFIGS)
module.exports = SERVER_CONFIGS;