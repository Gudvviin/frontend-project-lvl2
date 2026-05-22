#!/usr/bin/env node

import { program } from 'commander';
import { convertsToArray } from '../src/functions.js';

program
    .version('0.0.1', '-v, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')    //описывает программу
    .option('-f, --format [type]',  'output format')    // опеределение флагов ком.стр.,которые помогают с запуском
    .arguments('<args...>')
    .action((args) => {
        console.log(convertsToArray(args));
    });
    
program.parse();