#!/usr/bin/env node

import { program } from 'commander';
import { convertsToArray } from '../src/functions.js';
import { isObject } from '../src/parsers.js'
import { stylish } from '../commander/stylish.js';
import { listTransformation } from '../commander/str.js';

program
    .version('0.0.1', '-v, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')    //описывает программу
    .option('-f, --format [type]', 'output format')    // опеределение флагов ком.стр.,которые помогают с запуском
    .arguments('<args...>')
    .action((args) => {
        console.log(stylish(convertsToArray(isObject(args[0]), isObject(args[1])), 1, "-"));
    });

program.parse();