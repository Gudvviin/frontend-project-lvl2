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
   
    function subsequence (obj){
    const objectLength = Object.keys(obj).length;
    const objectResult = [];
    for (let i = 0; i < objectLength / 2; i++){ 
      objectResult.push(Object.keys(obj)[objectLength - 1 - i]);
      objectResult.push(Object.keys(obj)[i]);
      
    }
    return objectResult;
  }
    const callArr = [...new Set([...subsequence(obj1), ...subsequence(obj2)])];
   function listTransformation(list, arr) {
    const arrayStrings = [];
    list.forEach(element => {
      const result = arr.find(item => item.keyName === element);
      if (result.keyStatus === "removed"){
        arrayStrings.push(`- ${result.keyName}: ${result.keyValue}`)
      }
      if (result.keyStatus === "unchanged") {
        arrayStrings.push(`  ${result.keyName}: ${result.keyValue}`)
      }
      if (result.keyStatus === "changed") {
        arrayStrings.push(`- ${result.keyName}: ${result.keyValue}`)
        arrayStrings.push(`+ ${result.keyName}: ${result.keyValue2}`)
      }
      if (result.keyStatus === "added") {
        arrayStrings.push(`+ ${result.keyName}: ${result.keyValue}`)
      }
    });

    return `{\n${arrayStrings.join().replace(/,/g, ',\n')}\n}`
   };
   
    return listTransformation(callArr, result);
};
// function formattingForOutput (data){

// const result = data
// .reduce((acc, item) => {
//   if (item.keyStatus === "removed"){
//     acc["-"+item.keyName] = item.keyValue 
//   }
//    if (item.keyStatus === "unchanged"){
//     acc[""+item.keyName] = item.keyValue;
//   }
//   if (item.keyStatus === "changed"){
//     acc["-"+item.keyName] = item.keyValue;
//     acc["+"+item.keyName] = item.keyValue2;
//   }
//    if (item.keyStatus === "added"){
//     acc["+"+item.keyName] = item.keyValue;
//   }
//   return acc
// }, {})
// return result
// }

  export {convertsToArray};
