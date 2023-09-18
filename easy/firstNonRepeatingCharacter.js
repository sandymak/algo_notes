/* 

O(n) time |o(1) space // constant space because max 265 lower case letters
*/
function firstNonRepeatingCharacter(string) {
  const characterLibrary = {};

  for (const character of string) {
    characterLibrary[character] = characterLibrary[character] ? characterLibrary[character] += 1 : 1;
  }

  for (let i = 0; i < string.length; i += 1) {
    const character = string[i];
    if (characterLibrary[character] === 1) return i;
  }
  return -1;
}

module.exports = {firstNonRepeatingCharacter}