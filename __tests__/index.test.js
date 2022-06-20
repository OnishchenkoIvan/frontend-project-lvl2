import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (fileName) => fs.readFileSync(getFixturePath(fileName), 'utf-8');

test('test JSON', () => {
  expect(genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json')))
    .toEqual(readFile('expected_file.txt'));
});
