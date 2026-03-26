// @ts-check
import {mergeSorting} from '../src/functions.js';
import {sortingData} from '../src/parsers.js';

describe('mergeSorting function', () => {

    let objOne;
    let objTwo;

    beforeEach(() =>{
    objOne = {  name: 'Misha',
            age: 30,
            gender: 'men',
            fruit: 'mango'
        };

    objTwo = {  age: 37,
                name: 'Misha',
                gender: 'men',
                like: 'moto'
            };
            
        });

        test('should correctly compare two objects', () => {
    const expected = {
        '- age': 30,
        '+ age': 37,
        '- fruit': 'mango',
        gender: 'men',
        name: 'Misha',
        '+ like': 'moto'
    };
    
    expect(mergeSorting(sortingData(objOne), sortingData(objTwo))).toEqual(expected)
});
});
