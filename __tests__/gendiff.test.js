// @ts-check

import assert from 'power-assert';
import {mergeSorting} from '../bin/gendiff.js';

const data = mergeSorting();
    let objOne
    let objTwo
    beforeEach(() =>{
objOne = new Object(
{name: 'Misha',
age: 30,
gender: 'men',
fruit: 'mango'});
    objTwo = new Object(
{age: 37,
name: 'Misha',
gender: 'men',
like: 'moto'});
})
    test('', ()=>{
    const expected = {
  '- age': 30,
  '+ age': 37,
  '- fruit': 'mango',
  gender: 'men',
  name: 'Misha',
  '+ like': 'moto'
}
    expect(data(objOne,objTwo)).toEqual(expected)
})

