import { isObject } from "./parsers.js";
import pkg from "lodash";
import _ from "lodash";

const {forEach} = pkg;

  function getArrOfObjects (object) {
    const arr = [];
    Object.keys(object).forEach((key) => {
      arr.push({keyName: key, keyValue: object[key]})
    })
    return arr;
  };

  function convertsToArray (data){
    const obj1 = isObject(data[0]);
    const obj2 = isObject(data[1]); 
    const result = _.unionBy(getArrOfObjects(obj1), getArrOfObjects(obj2), "keyName")
    .map((item, index, arr) => {
      const isKeyTrue = (item, obj) => obj.hasOwnProperty(item); 
      if (isKeyTrue(item.keyName, obj1) === isKeyTrue(item.keyName, obj2) && item.keyValue === obj1[item.keyName] && item.keyValue === obj2[item.keyName]){
        return {...item, keyStatus: "hasn't changed"};
      } else if (isKeyTrue(item.keyName, obj1) === isKeyTrue(item.keyName, obj2) && item.keyValue !== obj1[item.keyValue]) {
        return {...item, keyValue2: obj2[item.keyName], keyStatus: "has changed"}
      } else  if (isKeyTrue(item.keyName, obj1)){
        return {...item, keyStatus: "deleted"}
      } else  if (isKeyTrue(item.keyName, obj2)){
        return {...item, keyStatus: "add"}
      }
     return 
    }); 
    return result;
};

  export {convertsToArray};
