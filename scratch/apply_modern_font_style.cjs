const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update Typography variables
css = css.replace(
  /--font-heading:\s*'Playfair Display',\s*Georgia,\s*serif;/g,
  `--font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
);

css = css.replace(
  /--font-body:\s*'Poppins',\s*-apple-system,\s*BlinkMacSystemFont,\s*'Segoe UI',\s*Roboto,\s*sans-serif;/g,
  `--font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
);

css = css.replace(
  /--font-accent:\s*'Playfair Display',\s*Georgia,\s*serif;/g,
  `--font-accent: 'Dancing Script', 'Great Vibes', cursive;`
);

// 2. Replace hardcoded font-family references
css = css.replace(/font-family:\s*'Playfair Display',\s*Georgia,\s*serif;/g, `font-family: var(--font-heading);`);
css = css.replace(/font-family:\s*'Poppins',\s*sans-serif;/g, `font-family: var(--font-body);`);
css = css.replace(/font-family:\s*'Playfair Display',\s*'Caveat',\s*cursive,\s*Georgia,\s*serif;/g, `font-family: var(--font-accent);`);

// 3. Make headings feel crisp, modern, bold
css = css.replace(
  /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[\s\S]*?font-weight:\s*700;\s*\}/,
  `h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.015em;
  color: var(--color-espresso);
  font-weight: 700;
}`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated typography to modern Outfit & Plus Jakarta Sans!');
