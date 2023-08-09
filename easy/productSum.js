/* 
Write a function that takes in a "special" array and returns its produc sum.

A "special" array is a non-empty array that contains either integers or other
"special" arrays. The product sum of a "special" array is the sum of its elements, 
where "special" arrays inside it are summed themselves and then multiplies by their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; 
the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

Thereforem, the product sum of [x,y] is x+y
the product sum of [x,[y,z]] is x + 2*(y+z);
the product sum of [x,[y,[z]]] is x + 2*(y+3z);

Sample 
const array = [5,2,[7,-1],3,[6,[-13,8],4]] 

output 12
// 5 + 2 + 2(7 - 1) + 3 + 2(6 + 3(-13+8) + 4 ); 

*/

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, level = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      level += 1;
      sum += level * (productSum(array[i], level));
      level -= 1;
    } else {
      sum += array[i];
    }
  }
  return sum;
}

module.exports = {productSum};