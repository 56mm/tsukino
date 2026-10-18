import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = process.cwd();
const problems = [];
let inspectedFiles = 0;
let imageReferences = 0;

function inspectDirectory(directory) {
  for (const entry of readdirSync(directory)) {
    const file = join(directory, entry);

    if (statSync(file).isDirectory()) {
      inspectDirectory(file);
      continue;
    }

    inspectedFiles += 1;

    if (!/\.(jsx|js)$/.test(file)) continue;

    const source = readFileSync(file, 'utf8');
    const imports = source.matchAll(/from\s+['"](\.{1,2}\/[^'"]+)['"]/g);

    for (const [, modulePath] of imports) {
      const target = resolve(dirname(file), modulePath);
      const candidates = [target, `${target}.js`, `${target}.jsx`, `${target}.json`];

      if (!candidates.some((candidate) => existsSync(candidate))) {
        problems.push(`Missing import: ${modulePath} in ${file}`);
      }
    }
  }
}

inspectDirectory(join(root, 'src'));

const menuSource = readFileSync(join(root, 'src/data/menu.js'), 'utf8');
const imageNames = menuSource.matchAll(/image:\s*['"]([^'"]+)['"]/g);

for (const [, image] of imageNames) {
  imageReferences += 1;

  if (!existsSync(join(root, 'public/images', image))) {
    problems.push(`Missing image: ${image}`);
  }
}

const requiredFiles = [
  'public/images/hero-matcha.webp',
  'public/images/cafe-interior-wide.webp',
  'public/favicon.svg',
  'src/index.css',
  '.github/workflows/deploy.yml',
  'scripts/prepare-pages.mjs',
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    problems.push(`Missing file: ${file}`);
  }
}

console.log(`Checked ${inspectedFiles} source files and ${imageReferences} image references.`);

if (problems.length) {
  problems.forEach((problem) => console.error(problem));
  process.exitCode = 1;
} else {
  console.log('Imports, images and deployment files: OK');
}
