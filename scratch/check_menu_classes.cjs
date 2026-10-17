const fs = require('fs');
const menuJsx = fs.readFileSync('src/pages/Menu.jsx', 'utf8');
const css = fs.readFileSync('src/index.css', 'utf8');

const regex = /className=["'`]([^"'`]+)["'`]/g;
let match;
const classes = new Set();
while ((match = regex.exec(menuJsx)) !== null) {
  match[1].split(/\s+/).forEach(c => {
    if (c && !c.includes('{') && !c.includes('}')) {
      classes.add(c);
    }
  });
}

const missing = [];
classes.forEach(c => {
  if (!css.includes('.' + c)) {
    missing.push(c);
  }
});

console.log('All classes in Menu.jsx:', Array.from(classes));
console.log('Missing from CSS:', missing);
