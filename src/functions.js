import _ from "lodash";

function convertsToArray(obj1, obj2) {
  const result = _.sortBy(_.unionBy(Object.keys(obj1), Object.keys(obj2)))
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

  return result;
};


export { convertsToArray };
