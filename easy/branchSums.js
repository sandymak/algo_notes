/* 
Write a function that takes in a Binary Tree 
and returns a list of its branch sums ordered from leftmost
branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch
A Binary Tree branch ia a path of nodes in a tree that 
starts at the root node and ends at any leaf node.

Each BinaryTree node has an interger value, a left child node, 
and a right child node. Children nodes can either be BinaryTree
nodes themselves or None/null

tree =        1
         /        \
        2          3
      /   \      /   \
     4     5    6     7
    /  \  /  \ 
   8    9 10
output = [15, 16, 18, 10 , 11];
// 15 == 1 + 2 + 4 + 8;
// 16 == 1 + 2 + 4 + 9;
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6;
// 11 == 1 + 3 + 7;

Approach: DFS a binary tree
given results = [];
given accumulator: 

end case, if the node === null; we want to push the results;
if there is a left, we call the function again
if there is a right, we call the function again
if nothing & we have reached a leaf, what do we do? we want to return the results? 

T: O(n) | S: O(n)  --> The sums array is technically a sum of branch sums --> num of branches --> number of leaf nodes;
If we extrapolate that for worst case, in a balanced tree
we know the leaf node are 2 ^ k (k is depth level), 
which is roughly half of n total nodes, & when we look at upper bounds it will be roughly O(n)
Lastly, we will be bounded by O(n) becase we won't exceed n branch sums in a given binary tree
*/

function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

/* 

Below algorithm greedily traverses the tree left nodes deeply first (1-2 -4-8) and summs the values (1 + 2 + 4 + 8), stores the sum in a "sums" array which is kept in storage by closure (sums.push(runningSum)) before the function returns......ie 
the outer function calls the CalculateBranchSums by the right leaf node (1-2-4-9) and sums the values...etc etc

              1
            /   \
          2      3
        /  \    /  \
       4   5   6    7
      / \  /
     8  9 10

output = [15, 16, 18, 10 , 11];
// 15 == 1 + 2 + 4 + 8;
// 16 == 1 + 2 + 4 + 9;
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6;
// 11 == 1 + 3 + 7;

*/
function calculateBranchSums (node, runningSum, sums) {
  // address an edge case where a node has left/right but not both
  if (!node) return;

    // console.log('nodeValue', node.value);
    // console.log('sums', sums);
    const newRunningSum = runningSum + node.value;
   /* 
     if we have found a leaf node, 
     the running sum is now a branch sum & we should add to the sums
   */
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    /* 
      How does 'sums' get the newRunningSum for other function calls that have sums? 
      it is because of closure... the "sums" array is changed here & with closure, it continues to be changed
    */
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
    // console.log('sums left end', sums)
  calculateBranchSums(node.right, newRunningSum, sums);
    // console.log('sums right end', sums)
  
};

module.exports = {branchSums};