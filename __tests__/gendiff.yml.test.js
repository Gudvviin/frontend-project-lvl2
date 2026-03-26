// @ts-check
import {mergeSorting} from '../src/functions.js';
import {sortingData} from '../src/parsers.js';
import fs from 'fs';
import yml from 'js-yaml';

describe('mergeSorting function', () => {

  const data1 = yml.load(fs.readFileSync('mocks/filepath1.yml', "utf-8"));
  const data2 = yml.load(fs.readFileSync('mocks/filepath2.yml', "utf-8"));

test('should compare two files correctly yml', () => {

    const expected = {
  '- follow': false,
    host: 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': 50,
  '+ timeout': 20,
  '+ verbose': true
 };
    
    expect(mergeSorting(sortingData(data1), sortingData(data2))).toEqual(expected)
});
});
