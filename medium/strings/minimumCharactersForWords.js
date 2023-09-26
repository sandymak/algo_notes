/*
TIME: O(N * L) | Space O(c)
*/
function minimumCharactersForWords(words) {
  const wordsCharacters = {};
  for (const word of words) {
    const currentWordCharacters = {};
    for (const character of word) {
      currentWordCharacters[character] = currentWordCharacters[character] ? currentWordCharacters[character] += 1 : 1;
      wordsCharacters[character] = wordsCharacters[character] ? Math.max(wordsCharacters[character], currentWordCharacters[character]) : 1;
    }
  }

  const characters = [];
  for (const charCode in wordsCharacters) {
    let count = 0;
    while(count < wordsCharacters[charCode]) {
      characters.push(charCode);
      count += 1;
    }
  }
  // console.log('characters', characters)

  return characters;
}

module.exports = {minimumCharactersForWords}