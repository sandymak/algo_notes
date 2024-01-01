/** 
 * Approach: 
 * Utilize 2 pointer method. 1 pointer will loop through the nums array to view each integer. 
 * The 2nd pointer acts as a search tracker to find "the next distinct number" such that it
 * swap with the index of the 1st pointer.
 * A hash table is used to keep track of the distinct integers seen and the index where they
 * were found. This would help minimize duplicated iterations by the second search pointer.

 * Time: O(n)
 * Space:O(n)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // console.log('BEFORE nums = ', nums)
  let i = 0;
  let count = 0;
  // A hash table to store all the distinct integers found & the index of first found num
  let foundNumIndices = {};

  while (i < nums.length) {
    const currentNum = nums[i];
    if (foundNumIndices[currentNum] === undefined) {
    foundNumIndices[currentNum] = i;
      count += 1;
      i += 1;
    } else {
      // Since nums is presorted, we can assume the previous number would be the last distince number
      const lastDistinctNum= nums[i - 1] || nums[0];
      // A small performance improvement, we will start from the index of the last distinct number + 1
      let j = (foundNumIndices[lastDistinctNum] || i) + 1;

      // console.log('library???', foundNumIndices);
      // console.log('lastDistinvtNum', lastDistinctNum, "j", j)

      while (j < nums.length) {
        const searchNum = nums[j];
        if (foundNumIndices[searchNum] === undefined) {
          // swap current duplicate position with new non-duplicate position
          const temp = searchNum;
          nums[j] = currentNum;
          nums[i] = temp;
          
          foundNumIndices[searchNum] = j;
          count += 1;
          i += 1;
          break;
        } else {
          j += 1;
        }
      }
      if (j >= nums.length) {
        // console.log('leetcode 26. Remove Duplicate NEW nums = ',nums);
        // console.log('Number of distinct integers are=', count);
        return nums
        return count; 
      }
    }
    
  }

  // console.log('leetcode 26. Remove Duplicate NEW nums = ',nums);
  // console.log('Number of distinct integers are=', count);
  return nums;
  return count;


};


const nums = [1,1,1];
const actual = removeDuplicates(nums);

// console.log('actual==', actual)
module.exports = {removeDuplicates};