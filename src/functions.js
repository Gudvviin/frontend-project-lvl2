import { isObject } from "./parsers.js";
import pkg from "lodash";
import _ from "lodash";

const {forEach} = pkg;

  function convertsToArray (obj1, obj2){
    const result = _.unionBy(Object.keys(obj1), Object.keys(obj2))
    .map((item) => { const isKeyTrue = (item, obj) => obj.hasOwnProperty(item); 
      if (isKeyTrue(item, obj1) === isKeyTrue(item, obj2) && obj1[item] === obj2[item]){
        return {keyName: item, keyValue: obj1[item], keyStatus: "hasn't changed"};
      } else if (isKeyTrue(item, obj1) === isKeyTrue(item, obj2) && obj1[item] !== obj2[item]) {
        return {keyName: item, keyValue: obj1[item], keyValue2: obj2[item], keyStatus: "has changed"}
      } else  if (isKeyTrue(item, obj1)){
        return {keyName: item, keyValue: obj1[item], keyStatus: "deleted"}
      } else  if (isKeyTrue(item, obj2)){
        return {keyName: item, keyValue: obj2[item], keyStatus: "add"}
      } 
     return 
    }); 
    return result;
};

  export {convertsToArray};
