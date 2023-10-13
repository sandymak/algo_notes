/* 
time O(n) | space O(n)

Write a function that takes in an array of integers and returns a new array contianing, at each index,
the next elemener in the input array that's greater than the element at that index in the input array.

In other words, your function should return a new array where `outputArray[i]` is the next element in 
input array that's greater than `inputArray[i]` if there is no such next greater elemenr for a particular index,
the value at that index in the output array should be `-1`.

Additionally, your funciont should treat the input array as a circular array. A circular array wraps around
itself as if it were connected end-to-end.
*/
function nextGreaterElement(array) {

  const outputArray = new Array(array.length).fill(-1);
  const stack = [];

  // THE TRICK HERE IS TO LOOP TWICE and this is how you do it!!!!
  for (let i = 0; i < array.length * 2; i += 1) {
    const circularIdx = i % array.length;
    const currentElement = array[circularIdx];

    while (stack.length !== 0 && currentElement > array[stack[stack.length -1]]) {
      const top = stack.pop();
      outputArray[top] = currentElement;
    }
    stack.push(circularIdx)
  }

  return outputArray

}

module.exports = nextGreaterElement