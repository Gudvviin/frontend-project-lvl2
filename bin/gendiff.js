#!/usr/bin/env node

import { program } from 'commander';
import { convertsToArray, formattingForOutput } from '../src/functions.js';
import { isObject } from '../src/parsers.js'

program
    .version('0.0.1', '-v, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')    //описывает программу
    .option('-f, --format [type]',  'output format')    // опеределение флагов ком.стр.,которые помогают с запуском
    .arguments('<args...>')
    .action((args) => {
        console.log(formattingForOutput(convertsToArray(isObject(args[0]), isObject(args[1]))));
    });
    
program.parse();