/* 
Write  a function that takes in two non-empty arrays of integers,
find the pairs of numbers (one from each array) whose absolute difference is 
closest to zero, and returns an array containing these two numbers,
with the number from the first array in the first position.

Note that the absolute difference of two intergers is the distance between
them on the real number line. For example, the absolute difference of -5 and 5
is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smalles difference.

arrayOne = [-1,5,10,20,28,3];
arrayTwo = [26,134,135,15,17];

Naive approach:
1) sort the 2 arrays & have 2 loops to go through every element and compare them

T: O(nm) | S: O(1)
*/
function smallestDifference(arrayOne, arrayTwo) {
  const sortedArrayOne = arrayOne.sort((a,b) => a - b);
  const sortedArrayTwo = arrayTwo.sort((a,b) => a - b);

  console.log('sortedArrayOne', sortedArrayOne)
  console.log('sortedArrayTwo', sortedArrayTwo)

  let smallestAbsoluteDifference = Infinity;
  let smallestPairs = [];

  for (let i = 0; i < sortedArrayOne.length; i +=1) {
    for (let j = 0; j < sortedArrayTwo.length; j += 1) {
      const outerNumber = sortedArrayOne[i]; 
      const innerNumber = sortedArrayTwo[j]
      console.log('outer', outerNumber, "inner", innerNumber)
      const currentDifference = Math.abs(outerNumber - innerNumber)
      console.log('currentDifference', currentDifference);
      console.log('smallestr', smallestAbsoluteDifference)
      if (currentDifference < smallestAbsoluteDifference) {
        smallestAbsoluteDifference = currentDifference;
        numbers = [outerNumber, innerNumber];
      } 
    }
  }
  console.log('smallestAbsoluteDifference', smallestAbsoluteDifference);
  console.log('numbers', smallestPairs);
  return smallestPairs;
}

/* 

More optimal solution:
- Use binary search idea
- Sort the arrays
- Instantiate 2 pointers
- The idea is we want to find a pair of numbers that have the SMALLEST DISTANCE fron each other
- SMALLEST possible distance is ZERO (aka when number equal each other)
- if numberOne[i] < numberTwo[j] ( 1) check for the diff, store the smallest, increment i)
- if numberOne[i] > numberTwo[j] ( 1) check for the diff, store the smallest, increment j0
- if equal, we have found it!
- return pairs

T: O(nlogn + mlogm) | S: O(1)
*/
function smallestDifferenceTwoPointers(arrayOne, arrayTwo) {
  const sortedArrayOne = arrayOne.sort((a,b) => a-b);
  const sortedArrayTwo = arrayTwo.sort((a,b) => a-b);

  let smallestDifference = Infinity;
  let smallestPair = [];

  let i = 0; 
  let j = 0;

  while (i < sortedArrayOne.length && j < sortedArrayTwo.length) {
    const numberOne = sortedArrayOne[i];
    const numberTwo = sortedArrayTwo[j];
    const currentDifference = Math.abs(numberOne - numberTwo);
    if (numberOne === numberTwo) {
      return [numberOne, numberTwo];
    } else if (numberOne < numberTwo) {
      i++
    } else {
      j++
    }
    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
      smallestPair = [numberOne, numberTwo]
    }
  }
  return smallestPair;

}

module.exports = {smallestDifference, smallestDifferenceTwoPointers}