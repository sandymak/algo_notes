/* 
LOSS LESS Output

O(n) time && O(1) space
*/
function runLengthEncoding(string) {
  let output = '';
  let count = 1;
  let trackedCharacter = string[0];

  if (string.length <= 1) {
    return count+trackedCharacter;
  }

  for (let i = 1; i < string.length; i += 1) {
    const currentChar = string[i];

    if (currentChar !== trackedCharacter || count === 9) {
      output += `${count}${trackedCharacter}`;
      count = 0;
      trackedCharacter = currentChar;
    }
    
    if (currentChar === trackedCharacter) count += 1;
    
    if(i === string.length -1) {
      output += `${count}${trackedCharacter}`;
      break;
    }
  } 
  return output;
}

module.exports = {runLengthEncoding}