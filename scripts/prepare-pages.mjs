import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = 'dist';
const source = join(outputDirectory, 'index.html');
const destination = join(outputDirectory, '404.html');

copyFileSync(source, destination);
console.log('GitHub Pages fallback created: dist/404.html');
