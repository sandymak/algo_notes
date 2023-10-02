function balancedBrackets(string) {
  const openingBraces = "([{";
  const closingBraces = ")]}";
  const matchingSets = {
    ")" : "(",
    "}" : "{",
    "]" : "[",
  };
  const stack = [];
  for (const char of string) {
    if (openingBraces.includes(char)) {
      stack.push(char); } 
    else if (closingBraces.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length -1] === matchingSets[char]) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  console.log("STACK = ", stack)
  return stack.length === 0
}


module.exports = {balancedBrackets}