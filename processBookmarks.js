const fs = require('fs');

// Read input file
const inputFile = process.argv[2] || 'bookmarks.html';
const outputFile = process.argv[3] || 'bookmarks-processed.html';

let content = fs.readFileSync(inputFile, 'utf8');

// Regular expression to find anchor tags with TAGS attribute
const regex = /(<DT><A[^>]*TAGS="([^"]*)"[^>]*>)(.*?)(<\/A>)/g;

// Replace matching tags
content = content.replace(regex, (match, start, tags, title, end) => {
  // Clean up tags - replace spaces with underscores and remove commas
  const cleanTags = tags.replace(/[\s]/g, '_');
  
  // Create new title with tags
  const newTitle = `${title} Tags=${cleanTags}`;
  
  // Return reconstructed anchor tag
  return `${start}${newTitle}${end}`;
});

// Write output file
fs.writeFileSync(outputFile, content);

console.log(`Processed bookmarks written to ${outputFile}`);