/* 
O (n+m) time O(c) space

*/
function generateDocument(characters, document) {
  if (document === '') return true;
  if (characters.length < document.length) return false;

  const characterLibrary = {};
  for (let i = 0; i < characters.length; i += 1) {
    const characterCode = characters[i].charCodeAt().toString();
    characterLibrary[characterCode] = characterLibrary[characterCode] ? characterLibrary[characterCode] += 1 : 1;
  }

  for (let i = 0; i < document.length; i += 1) {
    const characterCode = document[i].charCodeAt().toString();
    if (!characterLibrary[characterCode]) return false;
    characterLibrary[characterCode] -=1;
    if (characterLibrary[characterCode] < 0 ) return false;
  }
  return true;
}

module.exports = {generateDocument};