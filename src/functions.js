function mergeSorting (oneArgument, twoArgument) {
  const obj = {};
  for (const oneKey in oneArgument) {
    if (oneKey in twoArgument) {
      if (oneArgument[oneKey] === twoArgument[oneKey]) {
        obj[oneKey] = oneArgument[oneKey];
      } else {
        obj[`- ${oneKey}`] = oneArgument[oneKey];
        obj[`+ ${oneKey}`] = twoArgument[oneKey];
      }
    } else {
      obj[`- ${oneKey}`] = oneArgument[oneKey];
    }
  }
  for (const twoKey in twoArgument) {
    if (!(twoKey in oneArgument)) {
      obj[`+ ${twoKey}`] = twoArgument[twoKey];
    }
  }
     return obj
    };
    export {mergeSorting};