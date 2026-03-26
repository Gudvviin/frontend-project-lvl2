import yml from 'js-yaml';
import * as fs from 'node:fs';
import { program } from 'commander';

    function parsingFile (number = 0) {
        const argument = `${'mocks/'}${program.parse(process.argv).args[number]}`;
        let obj = (argument.split('.').pop() === 'yml') ? yml.load(fs.readFileSync(argument, "utf8")) : JSON.parse(fs.readFileSync(argument, "utf8"));
        return obj;
    };

    function sortingData (data) {
        return Object.fromEntries(Object.entries(data).sort());
    };
    export {parsingFile, sortingData}
