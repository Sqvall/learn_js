const { readFile, writeFile, readFileSync, mkdir } = require('fs');
const path = require('path');

/** Simple read file */
readFile('file.txt', 'utf8', (error, text) => {
  if (error) throw error;
  console.log('File content:', text);
});

/** Buffered file if second argument lost */
readFile('file.txt', (error, buffer) => {
  if (error) throw error;
  console.log('File contain: ', buffer.length, 'byte.', 'First byte:', buffer[0], '\n', buffer);
});

/** Create and write file (default encoding UTF-8) */
writeFile('example_write.txt', 'This Node.js', error => {
  if (error) {
    console.log('Write file error:', error);
  } else {
    console.log('Write file OK');
  }
});

/** Simple sync read file */
console.log('Sync file content:', readFileSync('file.txt', 'utf8'));

/** Create new directory */
mkdir(path.join(__dirname, 'test'), (error) => {
  if (error) {
    throw error;
  } else {
    console.log('Folder created');
  }
});

// fs.appendFile(filePath, 'appending sting', err => {etc}) - append new text in already exists file
