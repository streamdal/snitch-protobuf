import { glob } from "glob";
import fs from "fs";
import path from 'path';

const files = await glob("./protos/**/*.ts")

files.forEach(file => {
  const dir = `./esm/${path.dirname(file)}`;
  const content = fs.readFileSync(file, 'utf-8')
    .split('\n').map(s => s.replace(/^(import .+? from ["']\..+?)(["'];)$/, '$1.ts$2'))
    .join('\n');

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(`./esm/${file}`, content, 'utf-8')
});