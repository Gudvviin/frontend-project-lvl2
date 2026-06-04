// @ts-check
import { isObject } from '../src/parsers.js';

describe('mergeSorting function', () => {
  test('should compare two files correctly yml', () => {
    const nameFile = "filepath1.json";
    const expected = {
      "host": "hexlet.io",
      "timeout": 50,
      "proxy": "123.234.53.22",
      "follow": false
    };
    const result = isObject(nameFile)
    expect(result).toEqual(expected)
  });
});
