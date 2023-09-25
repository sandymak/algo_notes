/* 
Time: O(n) | S: O(n);
*/
function reverseWordsInString(string) {
  let reversedString = '';
  let endIndex = null;
  let startIndex = null;

  for (let i = string.length -1; i >=0; i -= 1) {
    const character = string[i];
    if (character === ' ') {
      if (endIndex !== null) {
        startIndex = i + 1;
        reversedString += string.slice(startIndex, endIndex);
        endIndex = null;
        startIndex = null;
      } 
      reversedString += ' ';
    } else {
      if (endIndex === null) {
        endIndex = i + 1 > string.length ? string.length : i + 1;
      }
    }
  }
  if (endIndex !== null) reversedString += string.slice(0, endIndex);

  return reversedString;
}

module.exports = {reverseWordsInString}