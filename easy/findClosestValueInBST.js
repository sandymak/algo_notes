/* 
  Write a funcion that takes in a Binary Search Tree (BST) and a target integer value
  and returns the closest value to that target values contained in the BST

  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node. 
  A node is said to be a valid BST node if and only if it satisfies the BST property: 
  its value is strictly greater than the values of every node to its left;
  its value is less than or equal to the values of every node on its right; 
  and its children nodes are either valid BST nodes themselves of None / null.

  tree = 10
       /    \
      5      15
    /   \   /   \ 
   2     5 13    22
  /          \
 1            14
 target = 12;
 answer: 13;

 Plan: 
 *note* I cannot just check for the smallestNodeDifferece between the first node I inspect,
 that will prevent me from travelling deeper into the tree

 I need to perform DFS traversal... how to do this iteratively?
 
 1. initiate a currentNode
 2. If there is a left, set the currentNode to left
 3. if there is a right, set the currentNode to the right
 4. What to do with the closest....? maybe just update?
 
 Average: T: O(log(n)) | S: O(1);
 Worst: T: O(n) | S: O(1);
*/

function findClosestValueInBstIterative(tree, target) {
  let closestNode = tree;
  let currentNode = tree;
  // while we have not reached a non node
  while (currentNode !== null) {
    // console.log('currentNodeval', currentNode.value)
    // below is code to find which node is closer to target
    const closestNodeDifference = Math.abs(target - closestNode.value);
    const currentNodeDifference = Math.abs(target - currentNode.value);
    if (currentNodeDifference < closestNodeDifference) closestNode = currentNode;

    /* 
      // Logic is to ONLY traverse the left or right node depending on node value & target
      This logic works because for every BST node:

      left <= currNodeVal < right
    */
    if (target < currentNode.value) {
      currentNode = currentNode.left;
      // console.log('curreNodeLeft', currentNode.value)
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
         // console.log('curreNodeRight', currentNode.value)
    } else {
      break;
    }
  }
  return closestNode.value;
}

/*
 how to do this recursively..?
 -- recursively call the function & return them
 
 Average: T: O(log(n)) | S: O(lng(n));
 Worst: T O(n) | S: O(n)
*/

function findClosestValueInBstRecursive(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(currentNode, target, closest) {
   if (currentNode === null) return closest;
    // console.log('currentNodeval', currentNode.value)
    const closestNodeDifference = Math.abs(target - closest);
    const currentNodeDifference = Math.abs(target - currentNode.value);
    if (currentNodeDifference < closestNodeDifference) closest = currentNode.value;

    /* 
      This logic works because for every BST node:

      left <= currNodeVal < right
    */
    if (target < currentNode.value) {
      return findClosestValueInBstHelper(currentNode.left, target, closest)
      // console.log('curreNodeLeft', currentNode.value)
    } else if (target > currentNode.value) {
      return findClosestValueInBstHelper(currentNode.right, target, closest);
         // console.log('curreNodeRight', currentNode.value)
      //this else case is for when the node vale === target
    } else {
      return closest;
    }
}


module.exports = {
  findClosestValueInBstIterative,
  findClosestValueInBstRecursive,
}