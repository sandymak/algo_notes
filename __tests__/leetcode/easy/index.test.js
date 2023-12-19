const {merge} = require('../../../leetcode/easy/88-merge-sorted-array');


describe('88. Merge Sorted Array', () => {
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