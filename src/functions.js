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
function formattingForOutput (data){
const result = data
.reduce((acc, item) => {
  if (item.keyStatus === "removed"){
    acc["-"+item.keyName] = item.keyValue;
  }
  if (item.keyStatus === "unchanged"){
    acc[" "+item.keyName] = item.keyValue;
  }
  if (item.keyStatus === "changed"){
    acc["-"+item.keyName] = item.keyValue;
    acc["+"+item.keyName] = item.keyValue2;
  }
  if (item.keyStatus === "added"){
    acc["+"+item.keyName] = item.keyValue;
  }
  return acc
}, {})
return result
}

  export {convertsToArray,formattingForOutput};
