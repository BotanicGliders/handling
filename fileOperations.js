// fileOperations.js
// File handling operations

const fs = require('fs');

// Function to read content from a file
function readFromFile(filename) {
  try {
    const content = fs.readFileSync(filename, 'utf8');
    console.log(`Content of ${filename}:`);
    console.log(content);
  } catch (error) {
    console.error(`Error reading from ${filename}: ${error.message}`);
  }
}

// Function to write content to a file
function writeToFile(filename, content) {
  try {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Content written to ${filename}`);
  } catch (error) {
    console.error(`Error writing to ${filename}: ${error.message}`);
  }
}

// Exporting functions to be used in other files
module.exports = {
  readFromFile,
  writeToFile,
};
