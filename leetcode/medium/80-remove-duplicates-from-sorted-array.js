/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums;

  let l = 0;
  let m = 1;
  let r = 2

  while (r < nums.length) {
    const lVal = nums[l];
    const mVal = nums[m];
    const rVal = nums[r];

    console.log('lVal=', lVal, "mVal=", mVal, "rVal====", rVal)

    if (mVal === null) {
      nums = swap(m,r, nums)
      r += 1;
      continue;
    } else if (lVal === mVal) {
      if (mVal === rVal) {
        m[r] = null;
        r += 1
      } else {
        nums = swap(m +1, r, nums);
        l = m + 1;
        m = m +2;
        r += 1;
      }
    } else if (lVal !== mVal) {
      l += 1;
      m += 1;
    }

  }

  return nums;

};

function swap(first, second, nums) {
  const temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
  return nums;
}

console.log('removeDFuplicats', removeDuplicates([1,2,2,3,3,3,4]))

module.exports = {removeDuplicates};