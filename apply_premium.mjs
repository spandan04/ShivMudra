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
    let original = content;

    // 1. Replace hover states with flat champagne color
    content = content.replace(/hover:text-\[\#FF9933\]/g, 'hover:text-[#D8BE8A]');
    content = content.replace(/group-hover:text-\[\#FF9933\]/g, 'group-hover:text-[#D8BE8A]');
    content = content.replace(/hover:border-\[\#FF9933\]/g, 'hover:border-[#D8BE8A]');
    content = content.replace(/group-hover:border-\[\#FF9933\]/g, 'group-hover:border-[#D8BE8A]');
    
    // 2. Replace specific text tags with champagne gradient
    content = content.replace(/<p([^>]*)text-\[\#FF9933\]([^>]*)>/g, '<p$1champagne-gradient-text$2>');
    content = content.replace(/<h3([^>]*)text-\[\#FF9933\]([^>]*)>/g, '<h3$1champagne-gradient-text$2>');
    content = content.replace(/<span([^>]*)text-\[\#FF9933\]([^>]*)>View All Solutions<\/span>/g, '<span$1champagne-gradient-text$2>View All Solutions</span>');
    content = content.replace(/text-\[\#FF9933\](.*)View All Solutions/g, 'champagne-gradient-text$1View All Solutions');

    // 3. Any remaining text-[#FF9933] (like icons) gets flat champagne color
    content = content.replace(/text-\[\#FF9933\]/g, 'text-[#D8BE8A]');
    
    // Also change the orange background accents to champagne
    content = content.replace(/bg-\[\#FF9933\]/g, 'bg-[#D8BE8A]');
    content = content.replace(/border-\[\#FF9933\]/g, 'border-[#D8BE8A]');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Premium applied to:', filePath);
    }
  }
});
