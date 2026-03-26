#!/usr/bin/env node

import { mergeSorting } from '../src/functions.js';
import { parsingFile, sortingData} from '../src/parsers.js';
import { program } from 'commander';

program
    .version('0.0.1', `-V, --version, output the version number`)
    .option('-f, --format [type]',  'output format')
    .argument('<filepath1>', 'mocks')
    .argument('<filepath2>', 'mocks')
    .description('Compares two configuration files and shows a difference.')
    program.parse(process.argv);

   function stand(){
    console.log(mergeSorting(sortingData(parsingFile(0)), sortingData(parsingFile(0))))
   };

   stand();
