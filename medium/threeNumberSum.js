/* 

Write a function that takes in a non-empty array of distinct integers and an integer
representing a target sum. The function should find all triplets in the array that sum
up to the target sum and return a two-dimensional array of all these triplets. 
The numbers in each triplet should be ordered in ascending order, and the triplets
themselves should be orderd in ascending order with respect to the numbers they hold. 

If no three numbers sum up to the target summ the function should return an empty array.

const array = [12,3,1,2,-6,5,-8,6];
const targetSum = 0;

answer = [[-8,2,6], [-8,3,5], [-6,1,5]];


Approach: Sort & Create a dictionary
Have a bunch of edge cases but also loop through first & second operands.
*/

function threeNumberSum(array, targetSum) {
  const results = [];
  const numsDictionary = {};
  const sortedArrayASC = array.sort((a,b) => {
    if (!numsDictionary[a]) numsDictionary[a] = true;
    return a-b;
  });

  // console.log('numsDictionar', numsDictionary)

  for (let i = 0; i < sortedArrayASC.length-2; i += 1) {
    for (let y = i + 1; y < sortedArrayASC.length -1; y +=1) {
      const firstOperand = sortedArrayASC[i];
      const secondOperand = sortedArrayASC[y];
      const thirdOperand = targetSum - firstOperand - secondOperand;
      if (thirdOperand > sortedArrayASC[sortedArrayASC.length -1]) continue;
      if (thirdOperand === secondOperand || thirdOperand === firstOperand) continue;
      if (thirdOperand < secondOperand) continue;
      if (!numsDictionary[thirdOperand]) continue;
      results.push([firstOperand,secondOperand,thirdOperand]); 
      // console.log('results', results)
    }
  }
  return results;
};

/* 
Approach: 2 pointer problem
Have a left & right pointer. When the sum is less, increase left pointer, when the sum is more, decrease right pointer, when it's equal increase & decrease both. Do this until the left & right are not reversed.

*/
function threeNumberSumAlt(array, targetSum) {
  const sortedASC = array.sort((a,b) => a-b);
  const triplets = [];
  for (let i = 0; i < sortedASC.length - 2; i += 1) {
   let left = i + 1; // iterating number
   let right = sortedASC.length - 1; // the largest number
    
    while (left < right) {
   const currentSum = sortedASC[i] + sortedASC[left] + sortedASC[right];
      if (currentSum === targetSum) {
        triplets.push([sortedASC[i], sortedASC[left], sortedASC[right]]);
        left += 1;
        right -=1;
      } else if (currentSum < targetSum) {
        left +=1;
      } else if (currentSum > targetSum) {
        right -=1;
      }
    }
    
  }
  return triplets
}

const a = [12,3,1,2,-6,5,-8,6];
const t = 0;
const r = threeNumberSum(a,t);
const alt = threeNumberSumAlt(a,t);

// console.log("Three Number Sum", r, "works?", r[1][1] === 3);
// console.log("Three Number Sum Alt", alt, "works?", alt[1][1] === 3);

module.exports = {threeNumberSum, threeNumberSumAlt};