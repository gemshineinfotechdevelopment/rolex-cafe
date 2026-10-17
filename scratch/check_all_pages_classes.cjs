const fs = require('fs');
const pages = ['About.jsx', 'Contact.jsx', 'Gallery.jsx', 'Home.jsx', 'Menu.jsx'];
const css = fs.readFileSync('src/index.css', 'utf8');

pages.forEach(p => {
  const content = fs.readFileSync('src/pages/' + p, 'utf8');
  const regex = /className=["'`]([^"'`]+)["'`]/g;
  let match;
  const classes = new Set();
  while ((match = regex.exec(content)) !== null) {
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
  console.log(`Page ${p} missing:`, missing);
});
