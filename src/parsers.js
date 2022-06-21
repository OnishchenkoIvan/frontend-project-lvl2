import fs, { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const typeFile = (filename) => {
  const end = path.extname(filename);
  if (end === '.json') {
    return JSON.parse(readFileSync(filename));
  } if (end === '.yml' || end === '.yaml') {
    return yaml.load(readFileSync(filename));
  }
  return 'Wronf file type';
};
export { getFixturePath, readFile, typeFile };

// const pars1 = JSON.parse(readFileSync(filePath1));
// const pars2 = JSON.parse(readFileSync(filePath2));
