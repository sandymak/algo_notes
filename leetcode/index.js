const {groupAnagrams} = require('./medium/39-groupAnagrams');
const {combinationSum2} = require('./medium/40-combinationSum2');
const {convert} = require('./convert');
const {findShortestFreeBlock} = require('./timesheet');


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