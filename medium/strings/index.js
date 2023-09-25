const {longestPalindromicSubstring, longestPalindromicSubstring2} = require('./longestPalindromicSubstring');
const {groupAnagrams, groupAnagramsSort} = require('./groupAnagrams');
const {validIPAddresses } = require('./validIPAddresses');



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
// const anagrams = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp', 'ffhh'];
// const expectedGroups = [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo'], ['ffhh']];
// const actualGroups = groupAnagrams(anagrams);
// const actualGroupsSort = groupAnagramsSort(anagrams);

// console.log('Grouped Anagrams = ', actualGroups, 'is Equal??', actualGroups.join() === expectedGroups.join());
// console.log('Grouped Anagrams Sort = ', actualGroupsSort, 'is Equal??', actualGroupsSort.join() === expectedGroups.join());


/* 
 * 
 * MEDIUM - STRINGS
 *
*/
// ================= Valid IP Addresses
const inputString = '1921680';
const expectedIPAddresses = [
    '1.9.216.80',
    '1.92.16.80',
    '1.92.168.0',
    '19.2.16.80',
    '19.2.168.0',
    '19.21.6.80',
    '19.21.68.0',
    '19.216.8.0',
    '192.1.6.80',
    '192.1.68.0',
    '192.16.8.0',
  ];
const actualIPAddresses = validIPAddresses(inputString);

console.log('Valid IP Addresses = ', actualIPAddresses, "is Expected???", expectedIPAddresses.join() === actualIPAddresses.join())