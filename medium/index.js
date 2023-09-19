const {longestPalindromicSubstring, longestPalindromicSubstring2} = require('./longestPalindromicSubstring');


/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= Longest Palidromic Substring
const palString = 'abacdcabfxyzzzzyxr';
const expectedSubstring = 'xyzzzzyx';
const actualSubstring = longestPalindromicSubstring(palString);
console.log('Longest Palidromic Substring = ', actualSubstring, 'is Equal???', expectedSubstring === actualSubstring)

const actualSubstring2 = longestPalindromicSubstring2(palString);
console.log('Longest Palidromic Substring2 (build palidrome from midpoint) = ', actualSubstring2, 'is Equal???', expectedSubstring === actualSubstring)