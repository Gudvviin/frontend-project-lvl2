import * as fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import yaml from 'js-yaml';
import { plain } from '../formatters/index.js'
import { stylish } from '../formatters/commander.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getUrlPath = (nameFile) => path.join(__dirname, '..', '__fixtures__', nameFile);

function getConvertsToData(nameFile) {
    const arrUrl = getUrlPath(nameFile).split('.');
    const fileExtension = arrUrl[arrUrl.length - 1];


    if (fileExtension === "yml") {
        return yaml.load(fs.readFileSync(getUrlPath(nameFile), 'utf8'));
    } else if (fileExtension === "json") {
        return JSON.parse(fs.readFileSync(getUrlPath(nameFile), 'utf8'));
    } else {
        return "error, file unknown"
    }

};

const isObject = (data) => {
    if (getConvertsToData(data) instanceof Object) {
        return getConvertsToData(data)
    }
};

function getSomeFn(data, nameDefault, list) {
    const nameFn = data[Object.keys(data)[0]]
    if (nameFn === nameDefault) {
        return plain(list);
    }
    if (nameFn === 'stylish') {
        return stylish(list);
    }
}

export { isObject, getSomeFn };