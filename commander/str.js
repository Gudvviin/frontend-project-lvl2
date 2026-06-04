function listTransformation(arr, int = 0) {
  const indentation = "..";
  const arrayStrings = arr.map((element) => {
    if (element.keyStatus === "object") {
      return `${indentation.repeat(int + 1)}"${element.keyName}":${listTransformation(element.keyValue, int + 1)}`
    } else if (element.keyStatus === "object, removed") {
      return `${indentation.repeat(int + 1)}- "${element.keyName}": ${listTransformation(element.keyValue, int + 1)}`
    } else if (element.keyStatus === "object, add") {
      return `${indentation.repeat(int + 1)}+ "${element.keyName}": ${listTransformation(element.keyValue, int + 1)}`
    } else {
      if (element.keyStatus === "removed" || element.keyStatus === "object, removed") {
        return `${indentation.repeat(int + 2)}- "${element.keyName}": ${element.keyValue}`
      }
      if (element.keyStatus === "unchanged") {
        return `${indentation.repeat(int + 2)}"${element.keyName}": ${element.keyValue}`
      }
      if (element.keyStatus === "changed") {
        return [
          `${indentation.repeat(int + 2)}- "${element.keyName}": ${element.keyValue}`,
          `${indentation.repeat(int + 2)}+ "${element.keyName}": ${element.keyValue2}`
        ].join('\n')
      }
      if (element.keyStatus === "added" || element.keyStatus === "object, add") {
        return `${indentation.repeat(int + 2)}+ "${element.keyName}": ${element.keyValue}`
      }
    }
  });

  return `{\n${arrayStrings.join('\n')}\n${indentation.repeat(int)}}`
};

export { listTransformation }