const fs = require('fs');
const path = require('path');

function replaceExtensionsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace image paths in JS/JSX/CSS
  // Matches: ...something.(jpg|jpeg|png|JPG|JPEG|PNG) inside quotes or url()
  content = content.replace(/(['"`]\s*[^'"`]*?\.)(jpe?g|png|JPE?G|PNG)(\s*['"`])/g, (match, prefix, ext, suffix) => {
    // Keep favicon / manifest / logo.svg unchanged if any
    if (prefix.includes('.ico') || prefix.includes('.svg')) return match;
    return `${prefix}webp${suffix}`;
  });

  // Also replace in css url(...)
  content = content.replace(/(url\(\s*['"]?[^'")]+?\.)(jpe?g|png|JPE?G|PNG)(['"]?\s*\))/g, (match, prefix, ext, suffix) => {
    return `${prefix}webp${suffix}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated image imports in: ${filePath}`);
  }
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (['node_modules', 'build', '.git', 'scripts'].includes(item)) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.js', '.jsx', '.css', '.html'].includes(ext)) {
        replaceExtensionsInFile(fullPath);
      }
    }
  }
}

scanDir(path.join(__dirname, '..', 'src'));
scanDir(path.join(__dirname, '..', 'public'));

console.log('Finished updating image imports!');
