  /* 
  You're given a 2D array of integer matric.
  Write a function that returns the transpose of the matrix.

  You can assume the input matric always has at least 1 value; 
  however its width & height are necessarily the same.

  1. const m = [[1,2]] --> [[1], [2]];


  2. const n = [
    [1,2],
    [3,4],
    [5,6]
  ] 
  -->
  [
    [1,3,5],
    [2,4,6]
  ]

  3. const o = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
   --> 
   [
     [1,4,7],
     [2,5,8],
     [3,6,9]
   ]

  plan: it looks like in order to transpose, the inner & outer index are flipped
  we can traverse the original matrix but build the new matrix with the elems flipped

  1. initiate a new transposedMatrix = [];
  2. get inner matrix length
  3. get outer matrix length
  4, create a nested for loop that loops through the innerMatrix & outerMatrix
     for (let i = 0; i < innerMatrix; i += 1) {
     let innerArray
       for (let y = 0; y < outerMatrix; y += 1) {
          flippedElem = matrix[y][i];
          innerArray.push(flippedElem)
       }
       matrix.push(innerArray);
     }

  T: O(n*m) S: O(n*m)
  */
function transposeMatrix(matrix) {
  console.log('matrix', matrix)

  const transposedMatrix = [];
  const matrixRowLength = matrix[0].length;
  const matrixHeightLength = matrix.length;

  /* n = [
    [1,2],
    [3,4],
    [5,6]
  ] 

  */
  for (let i = 0; i < matrixRowLength; i += 1) {  // 0,1
    const newRow = [];
    for (let y = 0; y <matrixHeightLength; y += 1) { // 0, 1, 2
      // console.log('newRow', newRow)
      let flippedElement = matrix[y][i];
      newRow.push(flippedElement);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
}


const m = [[1,2]];

 const n = [
    [1,2],
    [3,4],
    [5,6]
  ];


const o = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const tests = [m,n,o];

// tests.forEach((test, index) => console.log(`TransposeMatrix ${index}`, transposeMatrix(test)))