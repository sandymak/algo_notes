/* 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
  * Method: Calculate which indices need to be shifted/changed. 
  * Create a duplicated array and update those values
  * Time: O(n) | Space: O(n)
*/
var rotate = function(nums, k) {
  // decrease k such that it only matters to with the length of the array
  k %= nums.length;
  const dupe = [...nums];

  for (let i = 0; i < nums.length; i += 1) {
    // calculation that determine the new index for shifted k
    const index = i + k > nums.length - 1 ? (i + k) - nums.length : i + k;
    // console.log('original=', i, 'new=',index, nums[i])
    nums[index] = dupe[i];
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
  * Method: Copy the segment that will be unshifted to the front of the array
  * Unshift that segment
  * Time: O(n) | Space: O(n)
*/
var rotate2 = function(nums, k) {
  // decrease k such that it only matters to with the length of the array
  k %= nums.length;
  // the spread operator is crucial in shifting all elements from the new spliced array
  nums.unshift(...nums.splice(nums.length - k, k));
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
  * Method (TRICK): 1) Reverse the entire array
  * 2) Reverse each segment of the array on the kth axis
  * Time: O(n) | Space: O(1)
*/
var rotate3 = function(nums, k) {
  // decrease k such that it only matters to with the length of the array
  k %= nums.length;
  if (k === 0 || nums.length === 0 || nums.length === 1) return nums;
  console.log('k?', k)
  // console.log('original=', nums)
  reverseArray(0, nums.length -1);
  // console.log('full array reverse', nums)
  reverseArray(0, k-1);
  // console.log('first segment reverse idx 0 to', k-1, nums)
  reverseArray(k, nums.length -1);
  // console.log('second segment reverse idx',k, 'to', nums.length -1, nums)

  function reverseArray (start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
    }
  }
};


module.exports = {rotate, rotate2, rotate3}