/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0 
    let r = 0

    while(r<nums.length){
        let count = 1
        // count the duplicates in a set & find the end of a set
        while(r+1<nums.length && nums[r] === nums[r+1]){
            r+=1
            count+=1
        }
        // build the number of duplicates in the set via the left pointer
        // left pointer is responsible for finding where a new set should begin
        for(let i = 0; i<Math.min(2,count);i++){
            nums[l] = nums[r]
            l+=1
        }
        // move r to a new set of numbers
        r+=1
    }
    return l

};

module.exports = {removeDuplicates};