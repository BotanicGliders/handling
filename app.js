// app.js
// Main application file using file operations

// Importing functions from fileOperations.js
const { readFromFile, writeToFile } = require('./fileOperations');

// Example usage of file operations
const filename = 'example.txt';
const contentToWrite = 'Hello, this is a sample content.';

// Writing content to a file
writeToFile(filename, contentToWrite);

// Reading content from a file
readFromFile(filename);
