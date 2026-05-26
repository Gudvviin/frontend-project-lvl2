import pkg from "lodash";
import _ from "lodash";

  function convertsToArray (obj1, obj2){
    const result = _.unionBy(Object.keys(obj1), Object.keys(obj2))
    .map((item) => {
      if (!_.has(obj1, item)){
        return {keyName: item, keyValue: obj2[item], keyStatus: "added"}
      } 
      if (!_.has(obj2, item)){
        return {keyName: item, keyValue: obj1[item], keyStatus: "removed"}
      } 
      if (obj1[item] === obj2[item]){
        return {keyName: item, keyValue: obj1[item], keyStatus: "unchanged"};
      }
      if (obj1[item] !== obj2[item]) {
        return {keyName: item, keyValue: obj1[item], keyValue2: obj2[item], keyStatus: "changed"}
      }
    
    }); 
    return result;
};

  export {convertsToArray};
