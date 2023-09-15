function caesarCipherEncryptor(string, key) {
  let encryptedString = '';
  for (let i = 0; i < string.length; i += 1) {
    encryptedString += getNewLetter(string[i], key)
    
  }

  return encryptedString;
}

function getNewLetter(letter, key) {
  const startCharCode = 'a'.charCodeAt() - 1;
  const endCharCode = 'z'.charCodeAt();
  const newKey = key % 26;
  
  const newLetterCode = letter.toLowerCase().charCodeAt() + newKey;
  return newLetterCode <= endCharCode 
    ? String.fromCharCode(newLetterCode) 
    : String.fromCharCode(startCharCode + (newLetterCode % endCharCode))
    
}


module.exports = {caesarCipherEncryptor};