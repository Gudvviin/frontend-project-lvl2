// @ts-check
import { plain } from '../formatters/index.js'
import { convertsToArray } from '../src/functions.js'

describe('mergeSorting function', () => {
    test('should compare two files correctly yml', () => {
        const arr1 = {
            "common": {
                "setting1": "Value 1",
                "setting2": 200,
                "setting3": true,
                "setting6": {
                    "key": "value",
                    "doge": {
                        "wow": ""
                    }
                }
            },
            "group1": {
                "baz": "bas",
                "foo": "bar",
                "nest": {
                    "key": "value"
                }
            },
            "group2": {
                "abc": 12345,
                "deep": {
                    "id": 45
                }
            }
        };
        const arr2 = {
            "common": {
                "follow": false,
                "setting1": "Value 1",
                "setting3": null,
                "setting4": "blah blah",
                "setting5": {
                    "key5": "value5"
                },
                "setting6": {
                    "key": "value",
                    "ops": "vops",
                    "doge": {
                        "wow": "so much"
                    }
                }
            },
            "group1": {
                "foo": "bar",
                "baz": "bars",
                "nest": "str"
            },
            "group3": {
                "deep": {
                    "id": {
                        "number": 45
                    }
                },
                "fee": 100500
            }
        };
        const arr = convertsToArray(arr1, arr2);
        const expected =
            `Property 'common.follow' was added with value: false
Property 'common.setting1' was added with value: [complex value]
Property 'common.setting2' was removed!
Property 'common.setting3' was updated. From 'true' tot 'null'
Property 'common.setting4' was added with value: blah blah
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' tot 'so much'
Property 'common.setting6.key' was added with value: [complex value]
Property 'common.setting6.ops' was added with value: vops
Property 'group1.baz' was updated. From 'bas' tot 'bars'
Property 'group1.foo' was added with value: [complex value]
Property 'group1.nest' was removed
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`
            ;
        const result = plain(arr)
        expect(result).toEqual(expected)
    });
});