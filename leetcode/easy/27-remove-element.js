var removeElement = function (nums, val) {
    let count = 0
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
      // console.log('numsI====', nums[i],'numsJ', nums[j]);

        if (nums[i] !== val) {
            count += 1
            i += 1
        } else if (nums[j] != val) {
            // console.log('nums BEFORE --', nums)
            const temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            // console.log('nums AFTER >>>>>', nums)
            i += 1
            j -= 1
            count += 1
        } else {
            j -= 1
        }
    }
  // console.log('leetcode 27. removeElement ===> count is', count)
  // console.log('CHANGED nums is', nums)
    return nums
}

// console.log('removeElement', removeElement([0,1,2,2,3,0,4,2], 2))

module.exports = {removeElement}