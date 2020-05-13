const { createServer } = require('http');

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <h1>Hello!</h1>
    <p>You search <code>${request.url}</code></p>
  `);
  response.end();
});

server.listen(8000);
console.log('Start listen: (port 8000)');
