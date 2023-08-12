/* 
Write a function that takes in an array of integers and returns a boolean representing
whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing
or entirely non-decreasing. 

Non-increasing elements aren't necessarily exclusively decreasing they simply don't increase. Similarly
non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] // true;

T: O(n) | S: O(1)

*/
function isMonotonic(array) {
  if (array.length <= 1) return true;
  const DESC = -1;
  const ASC = 1;
  let changes = 0;
  let trend = 0;

  for (let i = 1; i < array.length; i += 1) {
    const previous = array[i-1];
    const current = array[i];
    const comparison = compare(previous, current, trend);

    if (trend !== comparison) {
      trend = comparison;
      changes += 1;
    }
    if (changes >= 2) return false;
  }

  return true
}

function compare(num1, num2, originalTrend) {
  if (num1 < num2) return -1;
  if (num1 > num2) return 1;
  return originalTrend
}

module.exports = {isMonotonic};