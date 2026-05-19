import * as fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import yaml from 'js-yaml';
import { load } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getUrlPath = (nameFile) => path.join(__dirname, '..', 'mocks', nameFile);

function getConvertsToData (nameFile) { 
    const arrUrl = getUrlPath(nameFile).split('.');
    const fileExtension = arrUrl[arrUrl.length -1];


    if (fileExtension === "yml") {
        return yaml.load(fs.readFileSync(getUrlPath(nameFile), 'utf8'));
    } else if (fileExtension === "json") {
        return JSON.parse(fs.readFileSync(getUrlPath(nameFile), 'utf8'));
    } else {
        return "error, file unknown"
    }

};
// const getSortArr = (data) => Object.entries(getConvertsToData(data)).sort();

const isObject = (data) => {
    if (getConvertsToData(data) instanceof Object){
        return getConvertsToData(data)
    }
};

    export {isObject};