const {merge} = require('../../../leetcode/easy/88-merge-sorted-array');
const {removeElement} = require('../../../leetcode/easy/27-remove-element');
const {removeDuplicates} = require('../../../leetcode/easy/26-remove-duplicates')
const {majorityElement, majorityElementEfficient} = require('../../../leetcode/easy/169-majority-element');
const {romanToInt} = require('../../../leetcode/easy/13-roman-to-integer');
const {maxProfit} = require('../../../leetcode/easy/121-best-time-to-buy-and-sell');
const {lengthOfLastWord} = require('../../../leetcode/easy/58-length-of-last-word');
const {longestCommonPrefix} = require('../../../leetcode/easy/14-longest-common-prefix')

xdescribe("13. Roman to Integer", () => {
  it("Should return an integer conversion of roman numeral numbers", ()=> {
    const inputs = [
      {
        roman: "III",
        expected: 3
      },
      {
        roman: "LVIII",
        expected:58 
      },
      {
        roman: "MCMXCIV",
        expected: 1994 
      }
    ]

    inputs.forEach(input => {
      const actual = romanToInt(input.roman);
      expect(actual).toEqual(input.expected)
    })
  })   
})

xdescribe("14. Longest Common Prefix", () => {
  const tests = [
    [['florer'], 'florer'],
    [['flower',
      'floor',
      'flounder',
     ], 'flo'],
    [['flower',
      'flan',
      'pan',
     ], ''],
    [['pan',
      'put',
      'poise',
     ], 'p'],
    [['flour',
      'flower',
      'f',
     ], 'f'],
  ]


  test.each(tests)("longestCommonPrefix(%j) should equal %s", (words, expected) => {
    expect(longestCommonPrefix(words)).toEqual(expected);
  })
})

xdescribe('26. Remove Duplicates', () => {
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

xdescribe("58. Length Of Last Word", () => {
  const tests = [
    ["Hello World", 5],
    ["   Fly me     to   the moon     ", 4],
    ["Yo     ", 2],
  ]

  test.each(tests)("lengthOfLastWord(%j) should equal %d", (sentence, expected) => {
    expect(lengthOfLastWord(sentence)).toEqual(expected);
  });

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

xdescribe("121. Best Time to Buy and Sell", () => {
  it("should return maximum profits with given inputs", () => {
    const inputs = [
      {
        prices: [7,1,5,3,6,4],
        expected: 5
      },
      {
        prices: [7,6,4,3,1],
        expected: 0
      },
      {
        prices: [1,3],
        expected: 2
      },
      {
        prices: [1],
        expected: 0
      },
      {
        prices: [1,4,2],
        expected: 3
      },
      {
        prices: [3,2,6,5,0,3],
        expected: 4
      },
    ];

    inputs.forEach(input => {
      console.log('FOR input:', input.prices)
      const actual = maxProfit(input.prices);
      expect(actual).toEqual(input.expected)
    })

  })
})

xdescribe("169 Majority Element", () => {
  const inputs = [
    {
      nums: [2,2,2,2,2,2,3,3,4],
      expected: 2,
    },
    {
      nums: [2,3,3,3,4],
      expected: 3
    },
    {
      nums:  [6,1,1,1,2,3,1,1,6],
      expected:1
    },
    {
      nums: [1,1,1,2,3,1,1,6,6],
      expected: 1
    },
  ];
  const inputsWithoutMajority = [
    {
      nums: [1,1,1,2,3,1,1,6,6,6,6]
    },
    {
      nums: [2,3,4]
    },
    {
      nums: [1,2]
    },

  ]
  describe("Majority Element : Space: O(n)", () => {
    it('Should return majority element for every input', () => {
      inputs.forEach(input => {
         const actual = majorityElement(input.nums);
        expect(actual).toEqual(input.expected)
      })
    })
    it('Should return error for NO MAJORITY', () => {
      inputsWithoutMajority.forEach(input => {
        const actual = majorityElement(input.nums);
        expect(typeof actual).toEqual('object')
      })
    })
  })
  describe("Majority Element : Space: O(1) MORE EFFICIENT", () => {
    it('Should return majority element for every input', () => {
      inputs.forEach(input => {
         const actual = majorityElementEfficient(input.nums);
        expect(actual).toEqual(input.expected)
      })
    })
    it('Should return error for NO MAJORITY', () => {
      inputsWithoutMajority.forEach(input => {
        const actual = majorityElementEfficient(input.nums);
        expect(typeof actual).toEqual('object')
      })
    })
  })
})



