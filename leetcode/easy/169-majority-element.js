/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Time: O(n)
Space: O(n)
*/

function majorityElement(nums) {
  // console.log('nums', nums);
  const occurences = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (occurences[nums[i]]) {
      occurences[nums[i]] += 1;
    } else {
      occurences[nums[i]] = 1;
    }
  }

  // console.log('occurences', occurences);

 const {mostOccurence, num} = Object.keys(occurences).reduce((currentMostOccurence, currentKey) => {
   if (occurences[currentKey] > currentMostOccurence.mostOccurence) return {mostOccurence: occurences[currentKey], num: Number(currentKey)} 
   return {...currentMostOccurence}
 }, {mostOccurence: 0, num: null})

return mostOccurence > nums.length /2 ? num : new Error ('No Majority Element Found');
    
}

/* 
Uses : Boyre moore voting algorithm (Linear-Time Majority):
https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html

a. The Boyer-Moore Voting Algorithm is a simple and clever way to find the majority element in a list (an element that appears more than half of the time) with just two variables. 

Here's how it works in simple terms:

  1. Majority Element: Imagine you have a group of people, and you want to find out if one person is the "majority" (more than half the group).

  2. Two Variables: The algorithm uses two variables to keep track of a "candidate" (the current person you suspect might be the majority) and a "counter" (to keep count of how many times the candidate appears more than others).

  3. Voting Process: You go through the group one person at a time. If the candidate is the same as the current person, you increase the counter. If the candidate is not the same, you decrease the counter.

  4. Changing Candidates: If the counter reaches zero, it means the previous candidate is unlikely to be the majority. So, you change the candidate to the current person and reset the counter to 1.

  5. Final Check: After going through the entire group, the candidate that remains is the "likely" majority. You do a final check to confirm if this person indeed appears more than half the time.

  6. Saves Time: By cleverly canceling out pairs of different people, the algorithm quickly identifies a potential majority without counting everyone's votes.

  Time: O(n)
  Space: O(1)

*/
function majorityElementEfficient(nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      count += 1;
      candidate = num;
    } else if (candidate === num) {
      count += 1;
      candidate = num
    } else {
      count -= 1;
    }
  }
  let occurence = 0;
  for (let num of nums) {
    if (num === candidate) occurence += 1;
  }
  
  return occurence > nums.length /2 ? candidate : new Error("No Majority Element Found")
}


module.exports = {majorityElement, majorityElementEfficient}