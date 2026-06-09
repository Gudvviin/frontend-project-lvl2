function plain(arr, acc = []) {

  
  const arrayStrings = arr.map((element) => {

    if (element.keyStatus === "object") {
      acc.push(element.keyName)
      return `${plain(element.keyValue, acc)}`
    } else if (element.keyStatus === "object, removed") {
      if (typeof acc === "undefined") {
        return `Property '${element.keyName}' was removed`
      } else {
        return `Property '${acc.join('.')}.${element.keyName}' was removed`
      }
    }
    else if (element.keyStatus === "object, add") {
      if (typeof acc === "undefined") {
        return `Property '${element.keyName}' was added with value: [complex value]`
      } else {
        return `Property '${acc.join('.')}.${element.keyName}' was added with value: [complex value]`
      }
      
    } else {
      if (element.keyStatus === "removed") {
        return `Property '${acc.join('.')}.${element.keyName}' was removed`
      }
      if (element.keyStatus === "unchanged") {

        return `Property '${acc.join('.')}.${element.keyName}' was added with value: [complex value]`
      }
      if (element.keyStatus === "changed") {
        return `Property '${acc.join('.')}.${element.keyName}' was updated. From '${element.keyValue}' tot '${element.keyValue2}'`
      }
      if (element.keyStatus === "added") {
          return `Property '${acc.join('.')}.${element.keyName}' was added with value: ${element.keyValue}`

      }
    }
  });
  return `${arrayStrings.join('\n')}`

}

export { plain }