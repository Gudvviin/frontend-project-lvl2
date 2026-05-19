import { isObject } from "./parsers.js";
import pkg from "lodash";

const {forEach} = pkg;

  function getArrOfObjects (object) {
    const arr = [];
    Object.keys(object).forEach((key) => {
      arr.push({keyName: key, keyValue: object[key]})
    })
    return arr;
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


  function convertsToArray (data){
    const obj1 = isObject(data[0]);
    const obj2 = isObject(data[1]);
    const arr = getArrOfObjects(obj1);
    const arr2 = getArrOfObjects(obj2);
  const result = getArrOfObjects({...obj1, ...obj2})

    result.map((item) => {
      arr.filter((element) => {
        if(item.keyName === element.keyName && item.keyValue === element.keyValue){
          item.keyStatus = "deleted";
          return
        } else if (item.keyName === element.keyName && item.keyValue !== element.keyValue) {
          item.keyValue2 = element.keyValue;
          item.keyStatus = "has changed";
          return
        }
      })
      arr2.filter((element) => {
        if (item.keyName === element.keyName && item.keyValue === element.keyValue && item.keyStatus === "deleted"){
          item.keyStatus = "hasn't changed";
          return 
        }  else if (item.keyName === element.keyName && item.keyValue === element.keyValue && item.keyValue2 === undefined){
          item.keyStatus = "add"
          return 
        }
      })
    });
  console.log(result)
};

  export {convertsToArray};
