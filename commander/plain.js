function plain (arr) {
      const arrayStrings = arr.map((element) => {
    if (element.keyStatus === "object") {
      const result = plain(element.keyValue)
      return `Property '${element.keyName}.${result}' was added wirh: `
    } else if (element.keyStatus === "object, removed") {
      return `Property"${element.keyName}": ${element.keyValue}`
    } else if (element.keyStatus === "object, add") {
      return `Property"${element.keyName}": ${element.keyValue}`
    } else {
      if (element.keyStatus === "removed" || element.keyStatus === "object, removed") {
        return `Property '${element.keyName} was removed`
      }
      if (element.keyStatus === "unchanged") {
        return `Property"${element.keyName}": ${element.keyValue}`
      }
      if (element.keyStatus === "changed") {
        return [
          `Property"${element.keyName}": ${element.keyValue}`,
          `Property"${element.keyName}": ${element.keyValue2}`
        ].join('\n')
      }
      if (element.keyStatus === "added" || element.keyStatus === "object, add") {
        return `Property '${element.keyName} was added `
      }
    }
  });
   return `${arrayStrings.join('\n')}`

}
export {plain}