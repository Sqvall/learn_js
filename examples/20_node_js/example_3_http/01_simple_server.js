const { createServer } = require('http');
const fs = require('fs');
const path = require('path');
/** Package nodemon can help with live reload function */

const server = createServer((request, response) => {

  // response.writeHead(200, { 'Content-Type': 'text/html' });
  // if (request.url === '/') {
  //   fs.readFile(path.join(__dirname, 'templates', 'main.html'), (error, data) => {
  //     if (error) throw error;
  //     // response.write(data);
  //     response.end(data);
  //   });
  // } else if (request.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'templates', 'contact.html'), (error, data) => {
  //     if (error) throw error;
  //     response.end(data);
  //   });
  // } else {
  //   response.end();
  // }

  let filePath = path.join(__dirname, 'templates', request.url === '/' ? 'main.html' : `${request.url}`);
  const ext = path.extname(filePath);
  let contentType;

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    default:
      contentType = 'text/html';
  }

  if (!ext) {
    filePath += '.html';
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(__dirname, 'templates', 'error.html'), (error, data) => {
        if (error) {
          response.writeHead(500);
          response.end('');
        } else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(data);
        }
      });
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content);
    }
  });

});

server.listen(8000, () => console.log('--- Server has been started ---', '\n-- Start listen: (port 8000) --'));
