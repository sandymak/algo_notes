/* 

O(n^2) T | S: O(n)
*/
function longestPalindromicSubstring(string) {
  if (string.length === 0) return '';
  if (string.length === 1) return string;

  let palidromicSubstring = '';
  for (let i = 0; i < string.length; i += 1) {
    const {foundPalidrome, palidromeStartIndex, palidromeEndIndex} = findPalidrome(i, string.length -1, string);
    if (foundPalidrome && 
        palidromeEndIndex - palidromeStartIndex + 1 > palidromicSubstring.length
       ) {
      palidromicSubstring = string.substring(palidromeStartIndex, palidromeEndIndex + 1)
      // console.log('hello????',  string.substring(palidromeStartIndex, palidromeEndIndex + 1))
  };

  }
  return palidromicSubstring ? palidromicSubstring : string[0];
}

function findPalidrome (start, end, string) {
    let foundPalidrome = false;
    let palidromeStartIndex = null;
    let palidromeEndIndex = null;
    let leftIndex = start;
    let rightIndex = end;
    while (leftIndex < rightIndex) {
      if(string[leftIndex] === string[rightIndex]) {
        if (!foundPalidrome) {
          foundPalidrome = true;
          palidromeStartIndex = leftIndex;
          palidromeEndIndex = rightIndex;
        }
        leftIndex += 1;
        rightIndex -= 1;
      } else {
        if (foundPalidrome) {
          foundPalidrome = false;
          palidromeStartIndex = null;
          palidromeEndIndex = null;
          leftIndex = start;
          continue;
        }
        rightIndex -= 1;
      }
    }
  return {foundPalidrome, palidromeStartIndex, palidromeEndIndex}
}

/* 
Uses the logic that each character is the midpoint of a palidrome and expand outward

O(n^2) T | S O(n)
*/
function longestPalindromicSubstring2(string) {
  if (string.length === 0) return '';
  if (string.length === 1) return string;
  let palidromicSubstring = string[0];

  for (let i = 0; i < string.length; i += 1) {
    const evenPalidrome = findPalidrome2(i-1, i, string);
    const oddPalidrome = findPalidrome2(i-1, i + 1, string);
    palidromicSubstring = evenPalidrome && evenPalidrome.length > palidromicSubstring.length ? evenPalidrome : palidromicSubstring;
    palidromicSubstring = oddPalidrome && oddPalidrome.length > palidromicSubstring.length ? oddPalidrome : palidromicSubstring;
  }

  return palidromicSubstring;
  
}

function findPalidrome2(start, end, string) {
  let startIndex = null;
  let endIndex = null;
  let left = start;
  let right = end;

  while (start >= 0 && endIndex < string.length) {
    if (string[left] !== string[right]) break; 
    startIndex = left;
    endIndex = right;
    left -= 1;
    right +=1;
  }



  if (startIndex !== null && endIndex !== null) {
    console.log('substring???', string.substring(startIndex, endIndex + 1))
    return string.substring(startIndex, endIndex + 1);
  }

  return null;
}

module.exports = {longestPalindromicSubstring, longestPalindromicSubstring2}