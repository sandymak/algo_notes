/*
You're given an unordered list of unique integers nums in the range [1,n] where n represents the length
of nums + 2. This means that two number sin this range are missing from the list. 

Write a funciton that takes in this list and returns a new list with the two missing number, sorted.

nums [4,5,1,3]
expected = [2,6]

T: O(n) | S: O(n)
*/
function missingNumbersSimple(nums) {
  const includedNums = {};
  const output = [];

  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i];
    includedNums[currentNum] = 1;
  }

  for (let num = 1; num <= nums.length + 2; num += 1) {
   if (!includedNums[num]) output.push(num);
  }

  return output;
}

/* 
Mathematical manipulation

- get the difference between expected sum and actual
- split the difference by average, one operand will be less than and the other is more than
- loop through the numbers array aggain to sum the left and right rides as expected
and find the diffs

T: O(n) | S: O(1)
*/
function missingNumbers(nums) {
  let total = sum(arrayFromAToB(1, nums.length + 3));

  for (const currentNum of nums) {
    total -= currentNum;
  }

  const averageMissingValue = Math.floor(total/2);
  let foundFirstHalf = 0;
  let foundSecondHalf = 0;

  console.log('given nums', nums)
  console.log('average', averageMissingValue)

  for (const num of nums) {
    if (num <= averageMissingValue) {
      foundFirstHalf += num;
    } else {
      foundSecondHalf += num;
    }
  }

  const expectedFirstHalf = sum(arrayFromAToB(1, averageMissingValue + 1));
  const expectedSecondHalf = sum(arrayFromAToB(averageMissingValue + 1, nums.length + 3));

  console.log('expectedFirst', expectedFirstHalf, "foundFirst", foundFirstHalf);
  console.log('expectedSecond', expectedSecondHalf, "foundSecond", foundSecondHalf);

  return [expectedFirstHalf - foundFirstHalf, expectedSecondHalf - foundSecondHalf];
}

const arrayFromAToB = (a, b) => {
  const array = [];
  for (let num = a; num < b; num += 1) {
    array.push(num);
  }
  console.log(`formed array ${a} to ${b} `, array);
  return array;
}

const sum = array => array.reduce((a,b) => a + b);

module.exports = {missingNumbers}