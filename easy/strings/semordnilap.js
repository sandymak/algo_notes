/* 

O(n*m) T | O(n*m) S | n is the number of words &  m is the longest word

*/
function semordnilap(words) {
  const stringsToPair = [];
  const pairs = [];
  
  for (const currentWord of words) {
    if (stringsToPair.length === 0) {
      stringsToPair.push([currentWord]);
    } else {
      let foundPalidrome = false;
      for (let i = 0; i < stringsToPair.length; i += 1) {
        const strings = stringsToPair[i];
        if (strings.length < 2 && isPalidrome(currentWord, strings[0])) {
          foundPalidrome = true;
          pairs.push([strings[0], currentWord]);
          strings.push(currentWord);
        }
        
      }
      if (!foundPalidrome) {
        stringsToPair.push([currentWord]);
      }
    }
  }
  return pairs;
}

function isPalidrome (string1, string2) {
  if (string1.length !== string2.length) return false;

  let start = 0;
  let end = string2.length - 1;
  while (start < string1.length) {
    if (string1[start] !== string2[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
}

module.exports = {semordnilap}