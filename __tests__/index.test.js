import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = (ident) => fs.readFileSync(path.resolve(process.cwd(), ident), 'utf-8');
const getFixturePath = (ident) => path.join(__dirname, '..', '__fixtures__', ident);

test('test of gendiff', () => {
  const fileName1 = 'filepath1.json';
  const fileName2 = 'filepath2.json';
  expect(genDiff(getFixturePath(fileName1), getFixturePath(fileName2))).toEqual(readFile(getFixturePath('expected_file.txt')));
});
