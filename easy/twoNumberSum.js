/* 
Given an array of distinct numbers and a targetSum, find 2 elems in the array that can be added to get the targeSum. Max one pair & if none is found, return an empty array


*/

function twoNumberSum(array, targetSum) {
  /* 
  1. sort the array
  2. Create a while loop that is based on the beginning & end of the array
  3. Check the sum of 2 elems against target

  T: O(nlogn) | S: O(1)
  */
  const sortedASCArray = array.sort((a,b) => a-b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = sortedASCArray[left] + sortedASCArray[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right += 1;
    }
  }

  return [];
}



const m = [3,5,-4,8,11,1,-1,6];
const n = 10

// console.log('twoNumberSum2 for targetSum 10',twoNumberSum(m,n))

function twoNumberSum2(array, targetSum) {
  /* 
  a. initiate a dictionary where the key is the elem
  b. loop through the array & check for the difference in the dictionary

  T: O(n) S: O(n)

  */
  console.log(`array ${array}, targetSum ${targetSum}`)
  const nums = {};
  for ( const num of array ) {
    console.log('nums', nums);
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums ) {
      return [ potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// console.log('twoNumberSum for targetSum 10',twoNumberSum2(m,n))

module.exports = {
  twoNumberSum,
  twoNumberSum2
}