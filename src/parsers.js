import * as fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import yaml from 'js-yaml';
import { load } from 'js-yaml';
import { listTransformation } from '../commander/str.js';
import { plain } from '../commander/plain.js';
import { stylish } from '../commander/stylish.js';

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

function getSomeFn(data, nameDefault, list){
    const nameFn = data[Object.keys(data)[0]]
    if (nameFn === nameDefault) {
        return listTransformation(list);
    }
    if (nameFn === 'stylish'){
        return stylish(list);
    }
    if (nameFn === 'plain'){
        return plain(list);
    }
}

export { isObject, getSomeFn };