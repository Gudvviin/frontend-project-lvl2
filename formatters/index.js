function plain(arr, acc) {
  const arrName = [];
  if (typeof acc !== 'undefined') {
    arrName.push(acc)
  }
  const arrayStrings = arr.map((element) => {
    if (element.keyStatus === "object") {
      const clonArr = [...arrName];
      clonArr.push(element.keyName)
      return `${plain(element.keyValue, clonArr.join('.'))}`
    } else if (element.keyStatus === "object, removed") {
      if (typeof arrName === "undefined") {
        return `Property '${element.keyName}' was removed`
      } else {
        if (arrName.length !== 0) {
          return `Property '${arrName.join('.')}.${element.keyName}' was removed`
        } else {
          return `Property '${element.keyName}' was removed`
        }
      }
    }
    else if (element.keyStatus === "object, add") {
      if (typeof arrName === "undefined") {
        return `Property '${element.keyName}' was added with value: [complex value]`
      } else {
        if (arrName.length !== 0) {
          return `Property '${arrName.join('.')}.${element.keyName}' was added with value: [complex value]`
        } else {
          return `Property '${element.keyName}' was added with value: [complex value]`
        }
      }
    } else {
      if (element.keyStatus === "removed") {
        return `Property '${arrName.join('.')}.${element.keyName}' was removed!`
      }
      if (element.keyStatus === "unchanged") {
        return `Property '${arrName.join('.')}.${element.keyName}' was added with value: [complex value]`
      }
      if (element.keyStatus === "changed") {
        return `Property '${arrName.join('.')}.${element.keyName}' was updated. From '${element.keyValue}' tot '${element.keyValue2}'`
      }
      if (element.keyStatus === "added") {
        return `Property '${arrName.join('.')}.${element.keyName}' was added with value: ${element.keyValue}`
      }
    }
  });
  return `${arrayStrings.join('\n')}`

}
export { plain }