import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (f.startsWith('.')) return;
    if (f === 'node_modules') return;
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('.', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    if (/c8a45d/i.test(content)) {
      content = content.replace(/C8A45D/g, 'FF9933').replace(/c8a45d/g, 'ff9933');
      modified = true;
    }
    
    if (/b08d45/i.test(content)) {
      content = content.replace(/B08D45/g, 'E67E22').replace(/b08d45/g, 'e67e22');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated colors in:', filePath);
    }
  }
});
