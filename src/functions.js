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

  function convertsToArray (obj1, obj2){
    console.log(Object.keys(obj1).map(item => ({keyName: item , keyValue: obj1[item] })));
    const result = _.unionBy(getArrOfObjects(obj1), getArrOfObjects(obj2), "keyName")
    .map((item) => { const isKeyTrue = (item, obj) => obj.hasOwnProperty(item); 
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
