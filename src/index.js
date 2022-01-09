module.exports = function check(str, bracketsConfig) {
  let stack = [];
  // let arr = bracketsConfig.flat();
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].length > 0 &&
        str[i] === ")" &&
        stack[stack.length - 1] === "(") ||
      (str[i] === "]" && stack[stack.length - 1] === "[") ||
      (str[i] === "}" && stack[stack.length - 1] === "{") ||
      (str[i] === "|" && stack[stack.length - 1] === "|") ||
      (str[i] === "1" && stack[stack.length - 1] === "2") ||
      (str[i] === "3" && stack[stack.length - 1] === "4") ||
      (str[i] === "5" && stack[stack.length - 1] === "6") ||
      (str[i] === "7" && stack[stack.length - 1] === "7") ||
      (str[i] === "8" && stack[stack.length - 1] === "8")
    ) {
      stack.pop();
    } else if (
      str[i] === "(" ||
      str[i] === "[" ||
      str[i] === "{" ||
      str[i] === "|" ||
      str[i] === "1" ||
      str[i] === "3" ||
      str[i] === "5" ||
      str[i] === "7" ||
      str[i] === "8"
    ) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
