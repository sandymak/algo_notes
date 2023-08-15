/* 
Write a function that takes in an array of integers and returns the length of the 
longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing until they
reach a tip (the highest value in the peak), at which point they become strictly decreasing. 
Atr least three integers are required to form a peak.

For ecamples, the integers 1,4,10,2 for a peak, but the integers 4,0,10 don't and neither for the integers
1,2,2,0 Similarly, the integers 1,2,3 don't form a peak because there aren't any strictly decreasing
integers after the 3.

Input array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3];
expected 6 // 0,10,6,5,-1,-3

Approach: 
1. Find a peak +1, -1
2. If no peak is found, continue iterating through the array,
3. If a peak is found, 
4. iterated left & right until the end rang od the peak is found.
5. Get that peak length. 
6. Compare it to the max
7. continue to iterate from the right most index.

T: O(n) | S: O(1)
*/
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;

  while (i < array.length -1) {
    isPeak = array[i-1] < array[i] && array[i+1] < array[i];

    if (!isPeak) {
      i += 1;
      continue;
    } 

    let leftIndex = i - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex -=1;
    }
    let rightIndex = i + 2;
    while (rightIndex <= array.length -1 && array[rightIndex] < array[rightIndex -1]) {
      rightIndex += 1;
    }
    const currentPeakLength = rightIndex - leftIndex -1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIndex;
  }
  return longestPeakLength;
}


function longestPeakUgly(array) {
  console.log('array', array)
  let currentPeakLength = 0;
  let trackedDirection = null;
  let maxPeakLength = 0;
  let peakFound = false;

  for (let i = 1; i <= array.length -1; i += 1) {
    const previous = array[i-1];
    const current = array[i];
    const direction = getDirection(previous, current);

    if (peakFound) {
 
      if (trackedDirection === direction) {
        currentPeakLength += 1;
        if (i === array.length -1) maxPeakLength = Math.max(maxPeakLength, currentPeakLength);
      } else {
  
        maxPeakLength = Math.max(maxPeakLength, currentPeakLength);
        currentPeakLength = 0; 
        trackedDirection = null;
        peakFound = false;
        i-=1;
      }
    } else {
       if (direction === 1) {
        if (trackedDirection === null) {
          trackedDirection = direction;
          currentPeakLength = 2;
        } else if (trackedDirection === direction) {
          currentPeakLength += 1;
        }
      } else if (direction === 0) {
        currentPeakLength = 0;
        trackedDirection = null;
        peakFound = false;
      } else if (direction === -1) {
         if (trackedDirection === direction) currentPeakLength += 1;
          if (trackedDirection === 1) {
            peakFound = true;
            currentPeakLength += 1;
            trackedDirection = direction;
            maxPeakLength = Math.max(maxPeakLength, currentPeakLength);
          }
      }
    }
  }
  return maxPeakLength;
}

function getDirection(prev, curr) {
  if (prev < curr) return 1;
  if (prev > curr) return -1;
  return 0;
}

module.exports = {longestPeak, longestPeakUgly}