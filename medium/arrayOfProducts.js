/*

Write a function that takes in a non-empty array of integers and returns an array of the same length,
where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other
than input[i].

Note that you're expected to solve this problem without using division.

sample array = [5,1,4,2]

output = [8, 40, 10, 20]
 // 8 = 1 x 4 x 2
 // 40 = 5 x 4 x 2
 // 10 = 5 x 1 x 2
 // 20 = 5 x 1 x 4

Approach: Use a nested loop to keep track of the index to remove and the running product


T: O (n^2) | S: O (n)


*/

function arrayOfProducts(array) {
  if (array.length <= 1) return null;

  let i = 0;
  const products = [];
  while (i < array.length) {
    let runningProduct = 1
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) runningProduct *= array[j];
    }
    products.push(runningProduct);
    i += 1;
  }
  return products;
}

function arrayOfProductsPerformant(array) {
  const products = Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i += 1) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];

  }

  let rightRunningProduct = 1;
  for (let i = array.length -1; i > -1; i -= 1) {
    console.log('at i', i);
    console.log('fille value', rightRunningProduct,'array elem', array[i]);
    console.log('left running product BUILD BEFORE', products)
    products[i] *= rightRunningProduct;
    console.log('right running product RESULT', products)
    rightRunningProduct *= array[i];
    console.log('right runnin', rightRunningProduct)
  
  }

  return products;

}



module.exports = {arrayOfProducts, arrayOfProductsPerformant}