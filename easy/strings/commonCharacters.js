function commonCharacters(strings) {
  let allCharactersInStrings = {};

  for (let i = 0; i < strings.length; i += 1) {
    const characterCount = {};
    for (let j = 0; j < strings[i].length; j += 1) {
      const character = strings[i][j];
      if (!characterCount[character]) {
        characterCount[character] = 1;
        if(!allCharactersInStrings[character]) {
          allCharactersInStrings[character] = 1;  
        } else {
          allCharactersInStrings[character] += 1;
        }
      }
    }
    
  }

  let output = [];

  for (const key in allCharactersInStrings) {
    if (allCharactersInStrings[key] === strings.length) output.push(key);
  }

  return output;
}

module.exports = {commonCharacters};