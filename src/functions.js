import { isObject } from "./parsers.js";
import pkg from "lodash";
import _ from "lodash";

const {forEach} = pkg;

  function getArrOfObjects (object, text) {
    const arr = [];
    Object.keys(object).forEach((key) => {
      arr.push({keyName: key, keyValue: object[key], keyStatus: text})
    })
    return arr;
  };

    function isChanges (element, obj1, obj2) {
      let result = {};
      let nameElement = element.keyName;
      let valueElement = element.keyValue;
      const isKeyTrue = (element, obj) => obj.hasOwnProperty(element); 
      if (isKeyTrue(element.keyName, obj1) === isKeyTrue(element.keyName, obj2) && element.keyValue === obj1[element.keyName] && element.keyValue === obj2[element.keyName]){
        result = {...element, keyStatus: "hasn't changed"};
      } else if (isKeyTrue(element.keyName, obj1) === isKeyTrue(element.keyName, obj2) && element.keyValue !== obj1[element.keyValue]) {
        result ={...element, keyValue2: obj2[element.keyName], keyStatus: "has changed"}
      } else {
        result = {...element}
      }
     return result
    }

  function convertsToArray (data){
    const obj1 = isObject(data[0]);
    const obj2 = isObject(data[1]);
    const arr = getArrOfObjects(obj1, "deleted");
    const arr2 = getArrOfObjects(obj2, "add");
    const arryConcatenation = arr.concat(arr2);
    const arrayOfUniqueKeys = arryConcatenation.filter((item, index, arr) => index === arr.findIndex((obj) => item.keyName === obj.keyName));
    const result = arrayOfUniqueKeys.map((item, index, arr) => isChanges(item,obj1, obj2)); 
    console.log(result)
};

  export {convertsToArray};
