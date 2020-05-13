const { readFile } = require('fs').promises;

/** Simple read file */
readFile('file.txt', 'utf8')
  .then(text => console.log('File content:', text));
