import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import { readFile } from '../src/parsers';

test('test JSON', () => {
  expect(genDiff('filepath1.json', 'filepath2.json'))
    .toEqual(readFile('expected_file.txt'));
});

test('test YAML', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml'))
    .toEqual(readFile('expected_file.txt'));
});
