import _ from "lodash";

  function convertsToArray (obj1, obj2){
    const result = _.unionBy(Object.keys(obj1), Object.keys(obj2))
    .map((item) => {
       if (typeof obj1[item] === "object" && typeof obj2[item] === "object" && obj1[item] !== null && obj2[item] !== null) {
        return {keyName: item, keyValue: convertsToArray(obj1[item], obj2[item]), keyStatus: "object"};
      } 
       else if (typeof obj1[item] === "object" && obj1[item] !== null) {
        return {keyName: item, keyValue: convertsToArray(obj1[item], obj1[item]), keyStatus: "object"};
      }
        else if (typeof obj2[item] === "object" && obj2[item] !== null){
        return {keyName: item, keyValue: convertsToArray(obj2[item], obj2[item]), keyStatus: "object"};
      } 
      else {
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
  return subsequence(obj1)

  //   const callArr = [...new Set([...subsequence(obj1), ...subsequence(obj2)])];
  //  function listTransformation(list, arr) {
  //   const arrayStrings = list.map((element) => {
  //     const objElement = arr.find(item => item.keyName === element);
  //     console.log(list)
  //     if (objElement.keyStatus === "removed"){
  //       return `- ${objElement.keyName}: ${objElement.keyValue}`
  //     }
  //     if (objElement.keyStatus === "unchanged" || objElement.keyStatus === "object"){
  //       return `  ${objElement.keyName}: ${objElement.keyValue}`
  //     }
  //     if (objElement.keyStatus === "changed"){
  //       return [
  //         `- ${objElement.keyName}: ${objElement.keyValue}`, 
  //         `+ ${objElement.keyName}: ${objElement.keyValue2}`
  //       ].join('\n')
  //     }
  //     if (objElement.keyStatus === "added") {
  //       return `+ ${objElement.keyName}: ${objElement.keyValue}`
  //     }
  //   });
  //   return `{\n${arrayStrings.join('\n')}\n}`
  //  };
   
  //   return listTransformation(callArr, result);
};


  export {convertsToArray};
