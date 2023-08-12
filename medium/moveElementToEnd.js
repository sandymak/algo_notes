/* 
You're given an array of integers and an integer. Write a function that moves all instances of that
integer in the array to the end of the array and returns the array.

The function should perform this in place

array = [2,1,32,2,2,3,4,2];
toMove = 2;

T: O(n) | S: O(1) 
*/
function moveElementToEnd(array, toMove) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] === toMove) {
      if (array[start] !== array[end]) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
      }
      end -= 1;
    } else {
      start += 1;
    }
  }

  return array;
}

module.exports = {moveElementToEnd};