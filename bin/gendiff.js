#!/bin/gendiff.js node

import { program } from 'commander';
import * as fs from 'fs';
import path from 'path';

program
    .version('0.0.1')
    .option('-f, --format [type]',  'output format')
    .argument('<filepath1>', 'one data')
    .argument('<filepath2>', 'two data')
    .description('Compares two configuration files and shows a difference.')
    program.parse(process.argv);


   const file1 = fs.readFileSync("bin/filepath1.json", "utf8")
   const file1Read = JSON.parse(file1)
   const file2 = fs.readFileSync("bin/filepath2.json", "utf8")
   const file2Read = JSON.parse(file2)
   console.log(Object.assign(file1Read, file2Read))