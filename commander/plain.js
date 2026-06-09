function plain(arr, acc) {
  
const arrName = [];
  const arrayStrings = arr.map((element) => {
    
    if (element.keyStatus === "object") {
      arrName.push(element.keyName)
      
      return `${plain(element.keyValue, arrName)}`
    // }
    // else if (element.keyStatus === "object, removed") {
    
    //   arrName.push(element.keyName)
    //   return `${plain(element.keyValue, arrName)}`
    // }
    // else if (element.keyStatus === "object, add") {
    //   arrName.push(element.keyName)
    //   return `${plain(element.keyValue, arrName)}`
    } else {
      
      if (element.keyStatus === "removed" || element.keyStatus === "object, removed") {
        if (typeof acc !== 'undefined'){
        return `Property '${acc.join('.')}.${element.keyName}' was removed`
        } else {
          return `Property '${element.keyName}' was removed`
        }
      }
      if (element.keyStatus === "unchanged") {
        
        return `Property '${acc.join('.')}.${element.keyName}'  was added with value: [complex value]`
      }
      if (element.keyStatus === "changed") {
      //  console.log(acc)
        return `Property '${acc.join('.')}.${element.keyName}' was updated. From '${element.keyValue}' tot '${element.keyValue2}'`
      }
      if (element.keyStatus === "added" || element.keyStatus === "object, add") {
        if (typeof acc !== 'undefined') {
          // console.log(acc) 
          return `Property '${acc.join('.')}.${element.keyName}' was added with value: ${element.keyValue}`
        } else {
        return `Property '${element.keyName}' was added with value: [complex value]`
        }
      }
      
    }
  });
  return `${arrayStrings.join('\n')}`

}

export { plain }