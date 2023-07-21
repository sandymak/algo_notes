/* 
You're given a binary expression tree. Write a function to evaluate this tree mathematically
and return a single resulting integer.

All leaf nodes in the tree represent operands, which will aleays be positive integers.
All of the other nodes represent operators. 
There are 4 operatos supported, each of whick is represented by a negative integer.
 - -1: addition (l + r)
 - -2: subtraction (l - r)
 - -3: division ; rounded down (Math.floor(l/r));
 - -4: multiplication (l * r)

You can assume the tree will always be a valid expression tree.
Each operator also works as a grouping symbol, meaning the bottom of the tree
is always evaluated first, regardless of the operator.

tree =        -1
           /       \
         -2         -3
        /   \      /   \
      -4     2    8     3
     /   \
    2     3

    sample output 6 // (((2 *3) - 2) + (8/3)) =6

*/

/* 
  We want to return the recursive call when we have reached a leaf node, is when the value is positive integer
  if not, we want to recursively get the leftOperands and rightOperands
  and we return the math expression

  T: O(n); S: O(h) height
*/
function evaluateExpressionTree(tree) {
  if (tree.value >= 0) return tree.value;

  const leftOperand = evaluateExpressionTree(tree.left);
  const rightOperand = evaluateExpressionTree(tree.right);

  if (tree.value === -1) return leftOperand + rightOperand;
  if (tree.value === -2) return leftOperand - rightOperand;
  if (tree.value === -3) return Math.trunc(leftOperand / rightOperand);
  return leftOperand * rightOperand;

} 

module.exports = {evaluateExpressionTree}