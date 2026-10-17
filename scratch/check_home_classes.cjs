const fs = require('fs');
const homeJsx = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const css = fs.readFileSync('src/index.css', 'utf8');

const regex = /className=["'`]([^"'`]+)["'`]/g;
let match;
const classes = new Set();
while ((match = regex.exec(homeJsx)) !== null) {
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

console.log('All classes in Home.jsx:', Array.from(classes));
console.log('Missing from CSS for Home.jsx:', missing);
