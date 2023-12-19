/**
 * Approach: 
 * 2 pointer: Start at the end of each array's logical end. Compare and update nums1 with the larger number. Make sure to consider when we've reached the end and nums2 still have integers.
 * create a trackingIndex that store the placement in nums1 array that is updating.
 */

var merge = function (nums1, m, nums2, n) {
    // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...
    let i = m - 1
    let j = n - 1
    // Initialize a variable k to store the last index of the 1st array...
    let trackedIndex = m + n - 1
    // Create a loop until either of i or j becomes zero...
    while (i >= 0 && j >= 0) {
        const num1 = nums1[i]
        const num2 = nums2[j]
        if (num1 > num2) {
            nums1[trackedIndex] = num1
            i -= 1
        } else {
            nums1[trackedIndex] = num2
            j -= 1
        }
            trackedIndex -= 1
    }

    // j is not zero, which means some elements are yet to be merged.
    // Being already in a sorted manner, append them to the 1st array in the front.

    while (j >= 0) {
        nums1[trackedIndex] = nums2[j]
        j -= 1
        trackedIndex -= 1
    }

    console.log('AFTER nums1=', nums1)
    return nums1
}

// console.log('HELLOW!', merge([1,2,7,9,0,0], 4,[2,8],2))

module.exports = {merge}