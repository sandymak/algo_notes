const { removeDuplicates } = require('../../../leetcode/medium/80-remove-duplicates-from-sorted-array');

describe("80. Remove Duplicates From Sorte Array", () => {
  const tests = [
    [[1,2,2,2,3,4], 5],
    [[0,0,0,0,0,1,1,2,3,3,3,4,4,4,4], 9],    
  ];

  test.each(tests)("removeDuplicates(%j) should equal %d", (nums, expected) => {
    expect(removeDuplicates(nums)).toStrictEqual(expected);
  })
})