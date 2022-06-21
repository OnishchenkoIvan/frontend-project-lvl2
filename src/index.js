import _ from 'lodash';
// import { readFileSync } from 'fs';
import { getFixturePath, typeFile } from './parsers.js';

const genDiff = (file1, file2) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const pars1 = typeFile(filePath1);
  const pars2 = typeFile(filePath2);
  let arr = [];
  arr.push(Object.keys(pars1));
  arr.push(Object.keys(pars2));
  arr = arr.flat().sort();
  arr = _.sortedUniq(arr);
  let strResult = '{\n';
  arr.map((key) => {
    if (pars1[key] === pars2[key]) {
      strResult = (`${strResult}  ${key}: ${pars1[key]}\n`);
    } else if (pars1[key] === undefined) {
      strResult = (`${strResult}+ ${key}: ${pars2[key]}\n`);
    } else if (pars2[key] === undefined) {
      strResult = (`${strResult}- ${key}: ${pars1[key]}\n`);
    } else if (pars1[key] !== pars2[key]) {
      strResult = (`${strResult}- ${[key]}: ${pars1[key]}\n+ ${[key]}: ${pars2[key]}\n`);
    }
    return strResult;
  });
  return `${strResult}}`;
};

export default genDiff;
