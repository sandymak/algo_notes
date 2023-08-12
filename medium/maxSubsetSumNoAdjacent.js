/* 
Write a function that takes in an array of positive integers and returns the maximum sum
of non-adjacent elements in the array. If the input array is empty, the funciton should return 0.

sample input
array = [75,105,120,75,90,135];

sample output 330 // 75+120+135


t: O(n) | S: O(n)
*/
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let tabulatedSums = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < array.length ; i += 1) {
    const nextNum = Math.max(tabulatedSums[i-1], tabulatedSums[i-2] + array[i])
    tabulatedSums.push(nextNum);
  }
  return tabulatedSums[tabulatedSums.length-1];
}

/* 
Solutions without array 

T: O(n) | S: O(1)
*/

function maxSubsetSumNoAdjacent2(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  let twoIndicesAway = array[0];
  let oneIndexAway = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i += 1) {
    const current = Math.max(oneIndexAway, array[i] + twoIndicesAway);
    twoIndicesAway = oneIndexAway;
    oneIndexAway = current;
  }
  return oneIndexAway;
}

module.exports = {maxSubsetSumNoAdjacent, maxSubsetSumNoAdjacent2}