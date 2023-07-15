function isValidSubsequence(array, sequence) {
  /* 
  Given two non-empty arrays of integers, 
  write a function that determines whether the second array is a subsequence of the first one.

  As subsequence of an array is a set of numbers that aren't secessarily adjacent int he array
  but that are in the same order as they appear in the array. Note that a single number in an array
  anf the array itself are both valid subsequences of the array

  Plan

    [5,1,22,25,6,-1,8,10]
                       i
    [1,6,-1,10]
               y
  a. initiate y an index for sequence
  b matchCount? 1, 2, 3, 4

  1. Create a while loop where i <= array.length
  2. create a for loop for the sequence, where you start at y & end at sequence.length
      if there is no match, continue
      if there is a match 
         y +=1;
         matchCount += 1;
         break;
  3. at the end of for loop, i +=1

  tbd how to determine we have a subsequence?
     a. if array.length === subsequence.length && matchCount === subsequence.length --> true
        if array.length !== subsequence.length && matchCount === subsequence.length ---> true
        false
  
  

  */
  // automatically remove cases where the sequence is not a subseqeunce
  if (array.length < sequence.length) return false;


  // [5,1,22,25,6,-1,8,10]
  //  i
  // [5,1,22,23,6,-1,8,10]
  //  y
  let sequenceStart = 0;
  let matchCount = 0; 
  let index = 0;

  console.log('array', array);
  console.log('sequence', sequence);
  while (index < array.length) {
    for (let y = sequenceStart; y < sequence.length; y += 1) {
    console.log(sequence[y], array[index])
    console.log('matchCount', matchCount)
      if (sequence[y] === array[index]) {
        matchCount += 1;
        sequenceStart += 1;
        break;
      }
    }
    index +=1;
  }

  if (array.length === sequence.length && sequence.length === matchCount) return true;
  if (array.length !== sequence.length && sequence.length === matchCount) return true;
  return false;


}

const a = [5,1,22,25,6,-1,8,10];
const s = [5,1,22,23,6,-1,8,10];

console.log(isValidSubsequence(a,s));


module.expores = {
  isValidSubsequence
}