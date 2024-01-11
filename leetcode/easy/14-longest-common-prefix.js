/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i += 1) {
    if (commonPrefix === '') break;
      const word = strs[i];
      let j = 0;
      while (j < word.length) {
        if (word[j] !== commonPrefix[j]) break;
        j += 1;
      }
      commonPrefix = commonPrefix.slice(0,j);
  }  
  return commonPrefix;
};

module.exports = {longestCommonPrefix}