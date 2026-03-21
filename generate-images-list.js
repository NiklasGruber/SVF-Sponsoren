// Run this script whenever you add new images: node generate-images-list.js
const fs = require('fs');
const path = require('path');

const imagesFolder = './images';
const outputFile = './images-list.js';

// Get all files from the images folder
fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    console.error('Error reading images folder:', err);
    return;
  }

  // Filter for image and video files
  const mediaExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.mp4', '.webm', '.mov'];
  const imageFiles = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return mediaExtensions.includes(ext);
    })
    .map(file => `images/${file}`);

  // Write to JavaScript file
  const jsContent = `// Auto-generated file - do not edit manually\n// Run: node generate-images-list.js to update\nconst imagesList = ${JSON.stringify(imageFiles, null, 2)};\n`;
  fs.writeFileSync(outputFile, jsContent);
  console.log(`✓ Generated ${outputFile} with ${imageFiles.length} files`);
  console.log('Files:', imageFiles);
});
