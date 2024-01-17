const { removeDuplicates } = require('../../../leetcode/medium/80-remove-duplicates-from-sorted-array');
const {rotate, rotate2, rotate3} = require('../../../leetcode/medium/189-rotate-array');

xdescribe("80. Remove Duplicates From Sorte Array", () => {
  const tests = [
    [[1,2,2,2,3,4], 5],
    [[0,0,0,0,0,1,1,2,3,3,3,4,4,4,4], 9],    
  ];

  test.each(tests)("removeDuplicates(%j) should equal %d", (nums, expected) => {
    expect(removeDuplicates(nums)).toStrictEqual(expected);
  })
})

describe("189. Rotate Array", () => {
  const tests = [
    [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
    [[1,2,3,4,5,6,7], 14, [1,2,3,4,5,6,7]],
    [[1,2,3,4,5,6,7], 15, [7,1,2,3,4,5,6]],
    [[1,2,3,4,5,6,7], 0, [1,2,3,4,5,6,7]],
    [[], 1, []],
  ]
  test.each(tests)("rotate(%j, %d) should equal %j", (nums, k, expected) => {
    rotate(nums, k)
    expect(nums).toStrictEqual(expected)
  })
  const tests2 = [
      [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
      [[1,2,3,4,5,6,7], 14, [1,2,3,4,5,6,7]],
      [[1,2,3,4,5,6,7], 15, [7,1,2,3,4,5,6]],
      [[1,2,3,4,5,6,7], 0, [1,2,3,4,5,6,7]],
      [[], 1, []],
    ]
  test.each(tests2)("rotate2(%j, %d) should equal %j", (nums2, k, expected) => {
    rotate2(nums2, k)
    expect(nums2).toStrictEqual(expected)
  })
  const tests3 = [
      [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
      [[1,2,3,4,5,6,7], 14, [1,2,3,4,5,6,7]],
      [[1,2,3,4,5,6,7], 15, [7,1,2,3,4,5,6]],
      [[1,2,3,4,5,6,7], 0, [1,2,3,4,5,6,7]],
      [[], 1, []],
    ]
  test.each(tests3)("rotate3(%j, %d) should equal %j", (nums3, k, expected) => {
    rotate3(nums3, k)
    expect(nums3).toStrictEqual(expected)
  })
})