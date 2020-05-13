// Fore more comfortably client requests, can use node-fetch module
const { request } = require('http');
// const { request } = require('https');

const requestStream = request({
  hostname: 'eloquentjavascript.net',
  path: '/20_node.html',
  method: 'GET',
  headers: { Accept: 'text/html' },
}, response => {
  console.log('Response server code:', response.statusCode, '-', response.statusMessage);
});

requestStream.end();
