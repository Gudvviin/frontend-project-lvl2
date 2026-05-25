import { isObject } from "./parsers.js";
import pkg from "lodash";
import _ from "lodash";

const {forEach} = pkg;

  function convertsToArray (obj1, obj2){
    const result = _.unionBy(Object.keys(obj1), Object.keys(obj2))
    .map((item) => { 
      if (_.has(obj1, item) === _.has(obj2, item) && obj1[item] === obj2[item]){
        return {keyName: item, keyValue: obj1[item], keyStatus: "unchanged"};
      } else if (_.has(obj1, item) === _.has(obj2, item) && obj1[item] !== obj2[item]) {
        return {keyName: item, keyValue: obj1[item], keyValue2: obj2[item], keyStatus: "changed"}
      } else  if (_.has(obj1, item)){
        return {keyName: item, keyValue: obj1[item], keyStatus: "removed"}
      } else  if (_.has(obj2, item)){
        return {keyName: item, keyValue: obj2[item], keyStatus: "added"}
      } 
     return 
    }); 
    return result;
};

  export {convertsToArray};
