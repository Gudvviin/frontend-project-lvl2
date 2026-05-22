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
  function getArrayOfUniqueObject (arr1, arr2){
    const result = [...arr1, ...arr2]
    return result;
  };
  // function fun (arr, arr2) { 
  //   const result = [];
  //   arr2.forEach(function(item, i, arrDeep){
  //     if (arr.some(arrs => arrs.keyName === item.keyName && arrs.keyValue === item.keyValue)){
  //       item.keyStatus = "hasn't changed";
  //       result.push(item)
  //     } else if (arr.some(arrs => arrs.keyName === item.keyName && arrs.keyValue !== item.keyValue)){
  //       const foundItem = arr.find(arrs => arrs.keyName === item.keyName && arrs.keyValue !== item.keyValue);
  //        item.keyValue2 = foundItem.keyValue
  //       item.keyStatus = "has changed"; 
  //       result.push(item)
  //     } else if (arr.some(arrs => arrs.keyName !== item.keyName)){
  //       result.push(item)
  //       arr.forEach(it => {
  //         const result1 = arr2.some(obj => obj.keyName === it.keyName);
  //         if(!result1){
  //           result.push(it)
  //         }
  //       })
  //     } 
  //   })
  //   return result
  // };

      // result.map((item) => {
    //   arr.filter((element) => {
    //     if(item.keyName === element.keyName && item.keyValue === element.keyValue){
    //       item.keyStatus = "deleted";
    //       return
    //     } else if (item.keyName === element.keyName && item.keyValue !== element.keyValue) {
    //       item.keyValue2 = element.keyValue;
    //       item.keyStatus = "has changed";
    //       return
    //     }
    //   })
    //   arr2.filter((element) => {
    //     if (item.keyName === element.keyName && item.keyValue === element.keyValue && item.keyStatus === "deleted"){
    //       item.keyStatus = "hasn't changed";
    //       return 
    //     }  else if (item.keyName === element.keyName && item.keyValue === element.keyValue && item.keyValue2 === undefined){
    //       item.keyStatus = "add"
    //       return 
    //     }
    //   })
    // });
    function isChanges (element, obj1, obj2) {
      let result = {};
      let nameElement = element.keyName;
      let valueElement = element.keyValue;
      const isKeyTrue = (element, obj) => obj.hasOwnProperty(element); 
      if (isKeyTrue(element.keyName, obj1) === isKeyTrue(element.keyName, obj2)){
        if (element.keyValue === obj1[element.keyName] && element.keyValue === obj2[element.keyName]){
          result = {...element, keyStatus: "hasn't changed"};
        } else {
          result ={...element, keyValue2: obj2[element.keyName], keyStatus: "has changed"}
        }
      } else if (isKeyTrue(element.keyName, obj1) !== isKeyTrue(element.keyName, obj2)){
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
