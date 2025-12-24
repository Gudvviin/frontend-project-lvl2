#!/Projects/project2 node
import genDiff from '@hexlet/code';
    
    const { program } = require('commander');

    program
    .name('gendiff')
    .option('-h')
  const diff = genDiff(filepath1, filepath2);
  console.log(diff);
  console.log('qwe');
#!/bin/gendiff.js node

import { program } from 'commander';
import * as fs from 'fs';

program
    .version('0.0.1')
    .option('-f, --format [type]',  'output format')
    .argument('<filepath1>', 'one data')
    .argument('<filepath2>', 'two data')
    .description('Compares two configuration files and shows a difference.')
    program.parse(process.argv);

    function fileArgumentInfo (number = 0) {
        const argument = `${'bin/'}${program.parse(process.argv).args[number]}`;
        const obj = JSON.parse(fs.readFileSync(argument, "utf8"));
            return obj;
    }
    
    function sorted (obj) {
      return Object.fromEntries(Object.entries(obj).sort());
    }
    function immutability (oneArgument, twoArgument) {
  const obj = {};
  for (const oneKey in sorted(oneArgument)) {
    if (oneKey in sorted(twoArgument)) {
      if (oneArgument[oneKey] === twoArgument[oneKey]) {
        obj[oneKey] = oneArgument[oneKey];
      } else {
        obj[`- ${oneKey}`] = oneArgument[oneKey];
        obj[`+ ${oneKey}`] = twoArgument[oneKey];
      }
    } else {
      obj[`- ${oneKey}`] = oneArgument[oneKey];
    }
  }
  for (const twoKey in twoArgument) {
    if (!(twoKey in oneArgument)) {
      obj[`+ ${twoKey}`] = twoArgument[twoKey];
    }
  }
     return obj
    }
    
