import { copyFileSync, existsSync, lstatSync, mkdirSync, readlinkSync, symlinkSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const website = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repository = resolve(website, '..');
const exports = resolve(repository, 'video/exports');
const copies = [
  [resolve(repository, 'report/epistemics/build/main.pdf'), resolve(website, 'public/files/macro-epistemics-paper.pdf')],
  [resolve(exports, 'macro-epistemics-draft-01.vtt'), resolve(website, 'public/media/macro-epistemics-draft-01.vtt')],
  [resolve(exports, 'macro-epistemics-draft-01-poster.png'), resolve(website, 'src/assets/images/macro-epistemics-poster.png')],
];

for (const [source, destination] of copies) {
  if (!existsSync(source)) throw new Error(`Required local research artifact is missing: ${relative(repository, source)}`);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(source, destination);
  console.log(`Prepared ${relative(website, destination)}`);
}

// Keep the actual production movie in the user-designated ignored video folder.
// Astro/Vite copies the linked file into ignored dist/ for a static deployment.
const movie = resolve(exports, 'macro-epistemics-draft-01.mp4');
const link = resolve(website, 'public/media/macro-epistemics-draft-01.mp4');
if (!existsSync(movie)) throw new Error('Render video/exports/macro-epistemics-draft-01.mp4 before preparing the site assets.');
if (existsSync(link)) {
  if (!lstatSync(link).isSymbolicLink() || resolve(dirname(link), readlinkSync(link)) !== movie) {
    throw new Error('Refusing to replace an unrelated movie in public/media.');
  }
} else {
  symlinkSync(relative(dirname(link), movie), link);
}
console.log('Linked local video export; no production asset moved out of video/.');
