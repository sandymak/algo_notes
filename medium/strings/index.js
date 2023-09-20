const {longestPalindromicSubstring, longestPalindromicSubstring2} = require('./longestPalindromicSubstring');
const {groupAnagrams, groupAnagramsSort} = require('./groupAnagrams');



/* 
 * 
 * MEDIUM - STRINGS
 *
*/
// ================= Longest Palidromic Substring
// const palString = 'abacdcabfxyzzzzyxr';
// const expectedSubstring = 'xyzzzzyx';
// const actualSubstring = longestPalindromicSubstring(palString);
// console.log('Longest Palidromic Substring = ', actualSubstring, 'is Equal???', expectedSubstring === actualSubstring)

// const actualSubstring2 = longestPalindromicSubstring2(palString);
// console.log('Longest Palidromic Substring2 (build palidrome from midpoint) = ', actualSubstring2, 'is Equal???', expectedSubstring === actualSubstring)

/* 
 * 
 * MEDIUM - STRINGS
 *
*/
// ================= Group Anagrams
const anagrams = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp', 'ffhh'];
const expectedGroups = [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo'], ['ffhh']];
const actualGroups = groupAnagrams(anagrams);
const actualGroupsSort = groupAnagramsSort(anagrams);

console.log('Grouped Anagrams = ', actualGroups, 'is Equal??', actualGroups.join() === expectedGroups.join());
console.log('Grouped Anagrams Sort = ', actualGroupsSort, 'is Equal??', actualGroupsSort.join() === expectedGroups.join());