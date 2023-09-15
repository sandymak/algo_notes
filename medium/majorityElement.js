/* 
Write a function that takes in a non-empty, unordered array of positive integers and returns
the array's majority element without sorting the array and without using more than constant space.

An array's majority element is an elemenet of that array that appears in over hald of its indices. 
[3,2,2,1] and [3,4,2,2,1] both have 2 as their most common elem but neither have a majority element

[3,2,2,2,1,2,1]
2

Brute Force 

T: O(n^2) | S: O(1)

*/
function majorityElementBruteForce(array) {
  const targetMajorityCount = (array.length)/2;

  for (let i = 0; i < array.length; i += 1) {
    let currentNum = array[i];
    let sameNumCount = 1;
      for (let j = i + 1; j < array.length; j += 1) {
        let nextNum = array[j];
        if (nextNum === currentNum) sameNumCount += 1
        
      }
    if (sameNumCount > targetMajorityCount) return currentNum;
  }

  return -1;
}

/* 
Use the trick that in order for an element to be a majority, they need to appear
more than half the time in the array

Somehow by storing the element where count = 0 does the trick... hmm....

T: O(n) | S: O(1)
*/
function majorityElement(array) {
  // let count = 0;
  // let answer = null;

  // for (const value of array) {
  //   console.log('v', value)
  //   if (count === 0) {
  //     console.log('answer before', answer);
  //     answer = value;
  //     console.log('COUNT === 0, AFTER answer', answer)
  //   }

  //   if (value === answer) {
  //     count += 1;
  //   } else {
  //     count -= 1;
  //   }
  //   console.log('count', count)
  // }
 
  // return answer;

  const arr = [
    {category: 'hello', name: 'world'},
    {category: 'hello2', name: 'world'},
    {category: 'hello', name: 'world'},
    {category: 'hello3', name: 'world'},
    {category: 'hello3', name: 'world'},
    {category: 'hello4', name: 'world'},
    {category: 'hello2', name: 'world'},
    {category: 'hello3', name: 'world'},
  ]

  const categories = arr.reduce((accumulator, elem) => {
    // console.log('accumulator', accumulator)
    // console.log('elem', elem.category)
    // console.log('resutn???', accumulator.includes(elem.category))
    if (accumulator.includes(elem.category) === false) accumulator.push(elem.category)
    return accumulator
  }, [])

  console.log('categories', categories)

  return categories
}

module.exports = {majorityElement}