/* 
You're given a list of integers nums. Write a function tht returns a boolean representing whether there
exists a zero-sum subarray of nums.

A sero-sum subarray is any subarry where all of the values add up to zero. A subarray is any contiguous
section of the array. For the purposes of this problem, a subarray can be as small as one element and 
as long as the orginal array.

input [-2, 2]
return true;

T: O(n) | S: O(n)
*/
function zeroSumSubarray(nums) {
  if (!nums.length) return false;
  if (nums.length === 1 && nums[0] === 0) return true;
  
  let trackingSum = nums[0];
  const subArraySums = {[trackingSum] : 1, 0 : 1};
  

  for (let i = 1; i < nums.length; i += 1) {
    trackingSum += nums[i];
    if (trackingSum === 0) return true;
    if (subArraySums[trackingSum]) return true;
    subArraySums[trackingSum] = 1;
  }

  return false;
}

module.exports = {zeroSumSubarray};