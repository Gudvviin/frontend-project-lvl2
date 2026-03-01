#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'fs';
import { mergeSorting } from '../src/functions.js';

program
    .version('0.0.1', `-V, --version, output the version number`)
    .option('-f, --format [type]',  'output format')
    .argument('<filepath1>', 'one data')
    .argument('<filepath2>', 'two data')
    .description('Compares two configuration files and shows a difference.')
    program.parse(process.argv);


    function fileArgumentInfoSorted (number = 0) {
        const argument = `${'bin/'}${program.parse(process.argv).args[number]}`;
        const obj = JSON.parse(fs.readFileSync(argument, "utf8"));
            return Object.fromEntries(Object.entries(obj).sort());
    };

   function stand(){
    console.log(mergeSorting(fileArgumentInfoSorted(0), fileArgumentInfoSorted(1)))
   };

   stand();
