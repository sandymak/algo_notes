const {merge} = require('../../../leetcode/easy/88-merge-sorted-array');
const {removeElement} = require('../../../leetcode/easy/27-remove-element');
const {removeDuplicates} = require('../../../leetcode/easy/26-remove-duplicates')

describe('26. Remove Duplicates', () => {
  it ('Should return the array with duplicates moved to the back option 1', () => {
    const nums = [1,2,2,2,2];
    const actual = removeDuplicates(nums);
    const expected = [1,2,2,2,2];
    expect(actual).toStrictEqual(expected);
  })
  it ('Should return the array with duplicates moved to the back option 2', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4];
    const actual = removeDuplicates(nums);
    const expected = [0,1,2,3,4,0,2,1,3,1];
    expect(actual).toStrictEqual(expected);
  })
  it ('Should return the array with duplicates moved to the back option 3', () => {
    const nums = [1,1,2];
    const actual = removeDuplicates(nums);
    const expected = [1,2,1];
    expect(actual).toStrictEqual(expected);
  })
})

xdescribe('27. Remove Element', () => {
  it('Should return expected array', () => {
    const nums = [0,1,2,2,3,0,4,2];
    const val = 2;
    const actual = removeElement(nums, val);
    const expected = [0, 1, 4, 0, 3, 2,2,2];
    expect(actual).toStrictEqual(expected);
  })
  it('Should return expected array2', () => {
    const nums = [3,4,3,1,3,8,3,9];
    const val = 3;
    const actual = removeElement(nums, val);
    const expected = [9,4,8,1,3,3,3,3,];
    expect(actual).toStrictEqual(expected);
  })
})

xdescribe('88. Merge Sorted Array', () => {
  it ("Should return sorted array for inputs option 1", () => {
    const nums1 = [1,2,7,9,0,0];
    const m = 4;
    const nums2 = [1,8];
    const n = 2;
    const actual = merge(nums1, m, nums2, n);
    const expected = [1,1,2,7,8,9]
    

    expect(actual).toStrictEqual(expected);
  })
  it ("Should return sorted arrays for inputs option 2", () => {
    const nums1 = [1,2,7,9,0,0];
    const m = 4;
    const nums2 = [1,1];
    const n = 2;
    const actual = merge(nums1, m, nums2, n);
    const expected = [1,1,1,2,7,9]
    

    expect(actual).toStrictEqual(expected);
  })
  it ("Should return sorted array for inputs option 3", () => {
    const nums1 = [1,2,7,9,0,0];
    const m = 4;
    const nums2 = [2,8];
    const n = 2;
    const actual = merge(nums1, m, nums2, n);
    const expected = [1,2,2,7,8,9]
    

    expect(actual).toStrictEqual(expected);
  })
})