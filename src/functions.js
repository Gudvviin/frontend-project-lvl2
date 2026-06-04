import _ from "lodash";

function convertsToArray(obj1, obj2) {
  const result = _.unionBy(Object.keys(obj1), Object.keys(obj2))
    .map((item) => {
      if (typeof obj1[item] === "object" && typeof obj2[item] === "object" && obj1[item] !== null && obj2[item] !== null) {
        return { keyName: item, keyValue: convertsToArray(obj1[item], obj2[item]), keyStatus: "object" };
      } else if (typeof obj1[item] === "object" && obj1[item] !== null) {
        return { keyName: item, keyValue: convertsToArray(obj1[item], obj1[item]), keyStatus: "object, removed" };
      } else if (typeof obj2[item] === "object" && obj2[item] !== null) {
        return { keyName: item, keyValue: convertsToArray(obj2[item], obj2[item]), keyStatus: "object, add" };
      } else {
        if (!_.has(obj1, item)) {
          return { keyName: item, keyValue: obj2[item], keyStatus: "added" }
        }
        if (!_.has(obj2, item)) {
          return { keyName: item, keyValue: obj1[item], keyStatus: "removed" }
        }
        if (obj1[item] === obj2[item]) {
          return { keyName: item, keyValue: obj1[item], keyStatus: "unchanged" };
        }
        if (obj1[item] !== obj2[item]) {
          return { keyName: item, keyValue: obj1[item], keyValue2: obj2[item], keyStatus: "changed" }
        }
      }
    });
 
  function listTransformation(arr) {
    const callArr = _.sortBy([...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]);
    const arrayStrings = callArr.map((element) => {
      const objElement = arr.find(item => item.keyName === element);
      if (objElement.keyStatus === "removed" || objElement.keyStatus === "object, removed") {
        return `- ${objElement.keyName}: ${objElement.keyValue}`
      }
      if (objElement.keyStatus === "unchanged" || objElement.keyStatus === "object") {
        return `  ${objElement.keyName}: ${objElement.keyValue}`
      }
      if (objElement.keyStatus === "changed") {
        return [
          `- ${objElement.keyName}: ${objElement.keyValue}`,
          `+ ${objElement.keyName}: ${objElement.keyValue2}`
        ].join('\n')
      }
      if (objElement.keyStatus === "added" || objElement.keyStatus === "object, add") {
        return `+ ${objElement.keyName}: ${objElement.keyValue}`
      }
     
    });

    return `{\n${arrayStrings.join('\n')}\n}`
  };

  return listTransformation(result);
};


export { convertsToArray };
