/* 
Given an array of integers between 1 and n, inclusive, where n is the length 
od the array, write a funciton that returns the first integer that appears more
than once (when the array is read from left to right)

array = [2,1,5,2,3,3,4] 
output ==> 2

aray [2,1,5,3,3,2,4]
output ==> 3


T: O(n) | S: O(n)
*/

function firstDuplicateValue(array) {
  const integerLib = {};

  for (let i = 0; i < array.length; i += 1) {
    const integer = array[i];
    if (!integerLib[integer]) {
      integerLib[integer] = true;
    } else {
      return integer;
    }
  }
  return -1
}

/* 
Something tricky about the problem where the elements are 1 - n where n is the length of the array
Can leverage this info to map the seen indices and values and negate them as they have been seen. 
Kind of hard to keep track of but is very performant

T: O(n) | S: O(1)
*/
function firstDuplicateValueTrick(array) {
  for (let value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue -1] *= -1
  }
  return -1
}


module.exports = {firstDuplicateValue, firstDuplicateValueTrick}