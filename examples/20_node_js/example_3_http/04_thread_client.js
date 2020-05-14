const { request } = require('http');

request({
  hostname: 'localhost',
  port: 8000,
  method: 'POST',
  headers: { Accept: 'text/html' },
}, response => {
  response.on('data', chunk => process.stdout.write(chunk.toString()));
}).end('Hello server');
