import { mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
const source = await readFile('src/weather-command-center.js', 'utf8');
await writeFile('dist/weather-command-center.js', source, 'utf8');
console.log('Built dist/weather-command-center.js');
