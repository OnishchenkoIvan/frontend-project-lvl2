import _ from 'lodash';
import path from 'path';
import { readFileSync } from 'fs';

const genDiff = (file1, file2) => {
  const filePath1 = path.resolve("frontend-project-lvl2", "../__fixtures__", file1);
  const filePath2 = path.resolve("frontend-project-lvl2", "../__fixtures__", file2);
  const pars1 = JSON.parse(readFileSync(filePath1));
  const pars2 = JSON.parse(readFileSync(filePath2));
  let arr = [];
  arr.push(Object.keys(pars1));
  arr.push(Object.keys(pars2));
  arr = arr.flat().sort();
  arr = _.sortedUniq(arr);
  let strResult = '{\n';
  const result = arr.map((key) => {
    if (pars1[key] === pars2[key]) {
      return strResult = (`${strResult}  ${key}: ${pars1[key]}\n`);
    } if (pars1[key] === undefined) {
      return strResult = (`${strResult}+ ${key}: ${pars2[key]}\n`);
    } if (pars2[key] === undefined) {
      return strResult = (`${strResult}- ${key}: ${pars1[key]}\n`);
    } if (pars1[key] != pars2[key]) {
      return strResult = (`${strResult}- ${[key]}: ${pars1[key]}\n+ ${[key]}: ${pars2[key]}\n`);
    }
  });
  return `${strResult}}`
};

export default genDiff;
