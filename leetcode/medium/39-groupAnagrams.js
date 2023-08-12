/*
Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

1. loop through the array of strs to get each word
2. loop through each character and convert it to a number via the letter.charCodeAt() get a sum of the word chars; !! ISSUE: we can potentially run into characters with codes that can be same sums ie "aa" & "Â"
2. (IMPROVED) loop through each character and convert it to a number via the letter.charCodeAt() to get a sum. We then HASH this sum by multiplying it with a prime number SPECIFICALLY for this character code placement (97). This will PREVENT the potential of duplicaiton
3. create a hash table
4. find if the hash key has the sum
5. if yes, push the word into the hashed map
6. if not, add a new key and [word]

after looping, loop throught eh hash map & retuen each anagram group in inner arays.

*/

function groupAnagrams (strs) {
  const anagramGroups = {};
  const anagrams = [];
  const primes = generatePrimes(26); // assuming that all char are lowercase 
  // console.log('primes', primes)
  // console.log('from char code', String.fromCharCode(194))
  for (let word of strs) {
    let wordSum = 0;
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      wordSum += (char.charCodeAt())*primes[char.charCodeAt()-97];
      
    }
    if (anagramGroups[wordSum]) {
      anagramGroups[wordSum].push(word);
    } else {
      anagramGroups[wordSum] = [word]
    }
  }
  // console.log('anagramGroups', anagramGroups);

  for (let key in anagramGroups) {
    if (anagramGroups.hasOwnProperty(key)) {
      anagrams.push(anagramGroups[key]);
    }
  }
  return anagrams;
}

function generatePrimes(n) {
  let primes = [2,3]
  let start = 4;
  while (primes.length < n ) {
    if (isPrime(start)) {
      primes.push(start)
    }
    start += 1;
  }
  return primes;
  
}

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number%i === 0) return false;
  }
  return true;
}

module.exports = {groupAnagrams};