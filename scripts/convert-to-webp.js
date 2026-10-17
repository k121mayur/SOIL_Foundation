const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

function getDimensions(filePath) {
  try {
    const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], { encoding: 'utf-8' });
    const widthMatch = out.match(/pixelWidth:\s*(\d+)/);
    const heightMatch = out.match(/pixelHeight:\s*(\d+)/);
    return {
      width: widthMatch ? parseInt(widthMatch[1], 10) : 0,
      height: heightMatch ? parseInt(heightMatch[1], 10) : 0
    };
  } catch (err) {
    return { width: 0, height: 0 };
  }
}

function scanDir(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === 'build' || item === '.git') continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath, fileList);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const targetDirs = [
  path.join(__dirname, '..', 'src'),
  path.join(__dirname, '..', 'public')
];

let totalOldBytes = 0;
let totalNewBytes = 0;
let count = 0;

for (const dir of targetDirs) {
  const files = scanDir(dir);
  for (const file of files) {
    const ext = path.extname(file);
    const webpPath = file.slice(0, -ext.length) + '.webp';
    const oldStat = fs.statSync(file);
    totalOldBytes += oldStat.size;

    const { width, height } = getDimensions(file);
    const args = [];

    if (width > 1920) {
      args.push('-resize', '1920', '0');
    } else if (height > 1920) {
      args.push('-resize', '0', '1920');
    }

    if (ext.toLowerCase() === '.png') {
      // Use lossless for PNGs with high compression
      args.push('-lossless');
    } else {
      args.push('-q', '82');
    }

    args.push(file, '-o', webpPath);

    try {
      execFileSync('cwebp', args, { stdio: 'ignore' });
      const newStat = fs.statSync(webpPath);
      totalNewBytes += newStat.size;
      count++;
      console.log(`[${count}] Converted: ${path.relative(path.join(__dirname, '..'), file)} -> ${path.basename(webpPath)} (${(oldStat.size / 1024).toFixed(1)} KB -> ${(newStat.size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Failed to convert ${file}:`, e.message);
    }
  }
}

console.log(`\n========================================`);
console.log(`Successfully converted ${count} images to WebP!`);
console.log(`Total original size: ${(totalOldBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Total WebP size: ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Space saved: ${(((totalOldBytes - totalNewBytes) / totalOldBytes) * 100).toFixed(1)}%`);
console.log(`========================================\n`);
