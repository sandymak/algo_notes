const {groupAnagrams} = require('./medium/39-groupAnagrams');
const {combinationSum2} = require('./medium/40-combinationSum2');
const {convert} = require('./convert');
const {findShortestFreeBlock} = require('./timesheet');
const { addLarge } = require('./addLarge');
const {substrings} = require('./substrings');
const {highlight} = require('./highlight');

const easyLeetCodeProblems = require('./easy')


/* 
*
*  MEDIUM
*
*/

// ======= Group Anagrams
// const words = ["eat","tea","tan","ate","nat","bat", "aaaaa", "aaaz", "a", "aa", "Â"];
// const groups = groupAnagrams(words);
// const expectedGroups = [[ 'bat' ], [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ] ].join();

// console.log(" LEETCODE: Group Anagrams", groups, "huh??", groups.join() === expectedGroups)


/* 
*
*  SPECIAL
*
*/

// ========== CONVERT
// const numberList = [1234567, 100, 10, 101100, 108, 1012047 ];
// const numberList = [10, 1010000];

// function conversions(numbers) {
//   for (let number of numbers) {
//     console.log(`LEETCODE Number: ${number} converted is: ${convert(number)}`)
//   }
// }

// conversions(numberList);


// ========== ADD LARGE
// addLarge('1', '1') // 2
// addLarge('91', '29'); // '120'
// addLarge("91", '290'); // '381'
// console.log('is true?' , addLarge('91000000000192211', '311219000') == '91000000311411211', '91000000311411211' == '91000000311411211')


// ========== Substrings

// console.log('Find all instances of a substring in a larger string and return the string with tags around the instances. Find all hits regardless of casing, but preserve the original casing in the return value.')


// ========== Highlight


