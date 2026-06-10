function stylish(data, int = 0, s = " ") {
    const sign = s;
    const result = data.map((item) => {
        if (item.keyStatus === "object") {
            return `${sign.repeat(int + 1)}  ${item.keyName}:${stylish(item.keyValue, int + 1, sign)}`
        } else if (item.keyStatus === "object, removed") {
            return `${sign.repeat(int + 1)}- ${item.keyName}:${stylish(item.keyValue, int + 1, sign)}`
        } else if (item.keyStatus === "object, add") {
            return `${sign.repeat(int + 1)}+ ${item.keyName}:${stylish(item.keyValue, int + 1, sign)}`
        } else {
            if (item.keyStatus === "removed" || item.keyStatus === "object, removed") {
                return `${sign.repeat(int + 2)}- ${item.keyName}: ${item.keyValue}`
            }
            if (item.keyStatus === "unchanged") {
                return `${sign.repeat(int + 2)}${item.keyName}: ${item.keyValue}`
            }
            if (item.keyStatus === "changed") {
                return [
                    `${sign.repeat(int + 2)}- ${item.keyName}: ${item.keyValue}`,
                    `${sign.repeat(int + 2)}+ ${item.keyName}: ${item.keyValue2}`
                ].join('\n')

            }
            if (item.keyStatus === "added" || item.keyStatus === "object, add") {
                return `${sign.repeat(int + 2)}+ ${item.keyName}: ${item.keyValue} `
            }
        }


    })
    return `{\n${result.join('\n')}\n${sign.repeat(int)}}`
};

export { stylish }