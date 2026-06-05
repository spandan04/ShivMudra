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

walkDir('./components', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    if (content.includes('text-white')) {
      content = content.replace(/text-white/g, 'text-[#ffffff]');
      modified = true;
    }
    if (content.includes('bg-white')) {
      content = content.replace(/bg-white/g, 'bg-[#ffffff]');
      modified = true;
    }
    if (content.includes('border-white')) {
      content = content.replace(/border-white/g, 'border-[#ffffff]');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed white in:', filePath);
    }
  }
});
