/* 
  Write a function that takes in a non-empty array of integers that are sorted in ascending order
  and returns a new array of the same length with the squares of the original integers 
  also sorted in the ascendin order

  [-5,-2, -1, 0, 1, 3, 6]
                       i
   negative? 
   [25,4, 1]
       o
   non negative? 
   [0,1,]

1. Use two pointers to keep track of the smallest & largest absolute values of the array, 
place the larger from right to left in the results array. (do I use shift?)

*/

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIndex = 0;
  let largerValueIndex = array.length - 1;

  for (let index = array.length - 1; index >= 0; index -=1) {
    const smallerValue = array[smallerValueIndex];
    const largerValue = array[largerValueIndex];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[index] = smallerValue * smallerValue;
      smallerValueIndex += 1;
    } else {
      sortedSquares[index] = largerValue * largerValue;
      largerValueIndex -=1;
    }
  }
  return sortedSquares;
}


let arr =   [-5,-2, -1, 0, 1, 3, 6];

// console.log('SortedSquaredArray', sortedSquaredArray(arr))

module.exports = {sortedSquaredArray}