const { removeDuplicates } = require('../../../leetcode/medium/80-remove-duplicates-from-sorted-array');

describe("80. Remove Duplicates From Sorte Array", () => {
  const tests = [
    [[1,2,2,2,3,4], [1,2,2,3,4,2]],
    [[0,0,0,0,0,1,1,2,3,3,3,4,4,4,4], [0,0,1,1,2,3,3,4,4,4,4,3,0,0,0]],    
  ];

  test.each(tests)("removeDuplicates(%j) should equal %j", (nums, expected) => {
    expect(removeDuplicates(nums).toString()).toEqual(expected.toString());
  })
})