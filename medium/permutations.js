/* 
Write a function that takes in an array of unique integers and returns
and array of all permutations of those integers in no particular order. 

If the input array is empty, the funciton should return an empty array.

Sample input = [1,2,3] 

output = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]] // length = 6

*/

function getPermutations(array) {
  const permutations = [];  
  let arr = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

/* 
* array: list of remaining integers
* currentPermutaiton: the current permutation we are constructing
* permutations: array of permutations we have constructed
*/
function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
    return;
  } else {
      /*
          This looping combined with the recursive call is what allows 
          the permutations to be built where we 'select' the first number
          and iterate to get combos of the rest.
          The flow of first permutation creation is 
          array (elems removed), currentPermutation (removed elem stored)
          [1,2,3], [] ==> 
            [2,3], [1]
              [3], [1,2]
                [], [1,2,3] ==> [[1,2,3]]
              [2], [1,3]
                [], [1,3,2] ==> [[1,2,3], [1,3,2]]
            [1,3], [2]
              [3], [2,1]
                [], [2,1,3] ==> [[1,2,3], [1,3,2], [2,1,3]]
              [1], [2,3]
                [], [2,3,1] ==> [[1,2,3], [1,3,2], [2,1,3], [2,3,1]]
            [1,2] , [3]
              [1], [3,2]
                [], [3,2,1] ==>
              [2], [3,1]
                [], [3,1,2] ==> [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]      
       */
      for (let i = 0; i < array.length; i += 1) {
        // start with i = 0 --> 1
        // Create a new array with the current element removed --> ie [2,3]
        const newArray = array.slice(0,i).concat(array.slice(i+1));
        // Add the removed element to current permutation to be built --> ie [1]
        const newPermutation = currentPermutation.concat([array[i]]);
        permutationsHelper(newArray, newPermutation, permutations, i);
     
     }
  }
};


function getPermutations2(array) {
  const permutations = [];
  permutationsHelper2(0, array, permutations);
  return permutations
}

/* 
i = index to keep track of the index of element to keep 
array = the array of elements
pemutations = list of permutations
*/
function permutationsHelper2(i, array, permutations) {
  // when the index to keep track has reached the end of the array, we have gotten a full permutation
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    // j is to keep track of the other elements that we oscillate to swap
    for (let j = i; j < array.length; j += 1) {
      // swap places between these elements
      swap(i, j, array)
      // recursively call the function and select the next index to keep
      permutationsHelper2(i + 1, array, permutations);
      // swap the elements back to keep track of original array
      swap(i, j, array)
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


module.exports = {getPermutations, getPermutations2}