#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(() => {
    const { args } = program;
    const options = program.opts();
    const [filepath1, filepath2] = args;
    const different = genDiff(filepath1, filepath2, options.format);
    console.log(different);
  })
  .parse(process.argv);
