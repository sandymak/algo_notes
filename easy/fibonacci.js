/* 
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
the second number is 1, and the nth number is the sum of the (n-1)the and (n-2)th number.
Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as 
F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; 
therefore, getNthFib(1) is equal to F(0), getNthFib(2) is equal to F1, etc.

n = 2 // output 1 (0,1)
n = 6 // output 5 (0,1,1,2,3,5)
n = 7 // 0,1,1,2,3,5,8
*/
function getNthFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n-1) + getNthFib(n-2);

}

module.exports = {getNthFib}