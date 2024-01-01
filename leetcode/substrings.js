/* 
Find all instances of a substring in a larger string and return the string with tags around the instances. Find all hits regardless of casing, but preserve the original casing in the return value.

Time: O(n*m)
Space: O(n)
*/

/*
* Eg: 
  "AaddolAdddaDddfsaddaAdDADDn"
  "add"
*/

function substrings(input, search) {
  let results = [];
  let i = 0;
  while (i < input.length) {
    const {isSubstring, stringCopy, endIndex} = getSubstring(input, search, i);
    if (isSubstring) {
      results.push(stringCopy);
      if (input[i+1].toLowerCase() === search[0].toLowerCase()) {
        i += 1;
      } else {
        i = endIndex;
      }
    } else {
      i += 1
    }
  }


  return results;
}

function getSubstring (string, substring, startIndex) {
  let stringCopy = '';
  let i = startIndex;
  let j = 0;

  console.log("string", string, 'start', startIndex)
  while (i < string.length && i < startIndex + substring.length && j < substring.length) {
    console.log('location????', string[i])
    if (string[i].toLowerCase() === substring[j].toLowerCase()) {
      stringCopy += string[i];
      i += 1;
      j += 1;
    } else {
      break
    }
  }
  if (stringCopy.length === substring.length) {
    console.log('endIndex', string[i])
    return {isSubstring: true, stringCopy, endIndex: i}
  } else {
    return {isSubstring: false, stringCopy: '', endIndex: null}
  }
}

const input1 = 'AaddolAdddaDddfsaddaAdDADDnad'
const search1 = 'add';
const expectedResults = ['add', 'Add', 'aDd', 'add', 'AdD', 'ADD']

// const results = substrings(input1, search1);

// console.log('results', results);
// console.log('isTrue?????', results.join() === expectedResults.join())


const input2 = 'bbBbfbbBb'
const search2 = 'BB';
const expectedResult2 = ['bb', 'bB', 'Bb', 'bb', 'bB', 'Bb']

// const result2 = substrings(input2, search2);

// console.log('results', result2);
// console.log('isTrue?????', result2.join() === expectedResult2.join())

module.exports = {substrings}