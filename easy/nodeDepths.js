/* 
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None/null.

tree =        1
         /        \
        2          3
      /   \      /   \
     4     5    6     7
    /  \  /   
   8    9 10
   
output = 19;
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc...
// Summing all of these depths yields 19.


Approach:
  - We want to travese through the tree with DFS
  - Each iteration when we reach a node, we will add the path to pathSums
  - when we reach a leaf node, we will return aka end traversal for a branch.
  
T: O(n) | S: O(h)
*/

function nodeDepthsRecursive(r, d = 0) {
  if (!r) return 0;
  return d + nodeDepthsRecursive(r.left, d + 1) + nodeDepthsRecursive(r.right, d + 1);
}
// BFS the stack is of all the leaf nodes in a row
function nodeDepthsIterative(t) {
  let runningDepths = 0;
  const stack = [{node: t, depth: 0}];

  while (stack.length > 0) {
    const {node, depth} = stack.pop();
    // we have reached a leaf node. but this might not be the ONLY leaf node in the tree
    // therefore, we must just "continue" the while loop until the stack has been emptied
    // the stack is the tracker of root node for traversal.
    if (!node) continue;
    runningDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1})
  }
  return runningDepths;
}

// console.log("Node Depths Recurssive", nodeDepthsRecursive(root));
// console.log("Node Depths Iterative",nodeDepthsIterative(root));

module.exports = {nodeDepthsRecursive, nodeDepthsIterative}