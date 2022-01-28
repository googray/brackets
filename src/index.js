module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};
  bracketsConfig.map((a) => openBrackets.push(a[0]));
  bracketsConfig.forEach((a) => (bracketsPair[a[1]] = a[0]));

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (openBrackets.includes(current)) {
      if (
        Object.keys(bracketsPair).includes(current) &&
        stack[stack.length - 1] === current
      ) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topItem = stack[stack.length - 1];
      if (bracketsPair[current] === topItem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
