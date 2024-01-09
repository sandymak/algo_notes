// Time: O(n) | Space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     let lastWordLength = 0;
//     let foundWord = false;

//     for (let i = s.length -1; i >= 0; i -=1) {
//         const currentChar = s[i];

//         if (!foundWord) {
//             if (currentChar !== " ") {
//                 foundWord = true;
//                 lastWordLength += 1;
//             }
//         } else {
//             if (currentChar === ' ') {
//                 foundWord = false;
//                 break;
//             } else {
//                 lastWordLength += 1;
//             }
//         }
//     }
//     return lastWordLength;
// };


/* Simplified logic */
function lengthOfLastWord (s) {
  let lastWordLength = 0;
  for (let i = s.length -1; i >= 0; i -= 1) {
    const currentChar = s[i];
    if (currentChar !== ' ') {
      lastWordLength += 1;
    }
    if (lastWordLength !== 0 && currentChar === ' ') break;
  }
  return lastWordLength;
}

module.exports = {lengthOfLastWord}