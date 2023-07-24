// UTILS
const {BinaryTree, treeTraverse, LinkedList} = require('./utils');

// Problems
const { twoNumberSum, twoNumberSum2 } = require('./easy/twoNumberSum');
const { isValidSubsequence } = require('./easy/validateSubsequence');
const { sortedSquaredArray} = require('./easy/sortedSquaredArray');
const { tournamentWinners} = require('./easy/tournamentWinners');
const { nonConstructibleChange} = require('./easy/nonConstructibleChange');
const { transposeMatrix} = require('./easy/transposeMatrix');
const { findClosestValueInBstIterative,
  findClosestValueInBstRecursive} = require('./easy/findClosestValueInBST.js')
const { branchSums} = require('./easy/branchSums');
const { nodeDepthsRecursive, nodeDepthsIterative} = require('./easy/nodeDepths');
const { evaluateExpressionTree} = require('./easy/evaluateExpressionTree');
const {graph} = require('./easy/graphTraverse');
const {removeDuplicatesFromLinkedList} = require('./easy/removeDuplicatesFromLinkedList');
const {middleNode} = require('./easy/middleNode');


// MEDIUM
const {threeNumberSum, threeNumberSumAlt} = require("./medium/threeNumberSum");





// BINARY TREES

/* 
tree =        1
         /        \
        2          3
      /   \      /   \
     4     5    6     7
    /  \  /   
   8    9 10
   
*/

/* 
  UNCOMMENT OUT BELOW TO RUN PROBLEMS
*/
// const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log('tree?', treeTraverse(tree))
// const bs = branchSums(tree);

// console.log("BranchSums", bs, "works?", bs[2] === [ 15, 16, 18, 10, 11 ][2]);

// const ndr = nodeDepthsRecursive(tree);
// console.log("Node Depths Recursive", ndr, "works?", ndr === 19);

// const ndi = nodeDepthsIterative(tree);
// console.log("Node Depths Iterative", ndi, "works?", ndi === 19);

/* 
tree =        -1
           /       \
         -2         -3
        /   \      /   \
      -4     2    8     3
     /   \
    2     3


*/
// const expressionTree = new BinaryTree(-1).insert([-2,-3,-4,2,8,3,2,3]);

// console.log('expressionTree?', treeTraverse(expressionTree));
// const expression = evaluateExpressionTree(expressionTree);

// console.log('Evaluate Expression Tree', expression, "works?", expression === 6);

/* 
   BST = 10
       /    \
      5      15
    /   \   /   \ 
   2     5 13    22
  /          \
 1            14
 
*/

/* 
  UNCOMMENT OUT BELOW TO RUN PROBLEMS
*/

// const bst = new BinaryTree(10).insert([5,15,2,5,13,22,1,14]);
// console.log('BST>?', treeTraverse(bst))

// const bstI12 = findClosestValueInBstIterative(bst, 12);

// console.log('Find Closest Value in BST Iterative', bstI12, "works?", bstI12 === 13);

// const bstR12 = findClosestValueInBstRecursive(bst, 12);
// console.log('Find Closest Value in BST Recursive', bstR12, "works?", bstR12 === 13);

// LINKED LISTS

  // const sortedLinkedList = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
  // const expectedNoDupes = new LinkedList(1).addMany([3, 4, 5, 6]).getNodesInArray();
  // const actualNoDupes = removeDuplicatesFromLinkedList(sortedLinkedList).getNodesInArray();

  // console.log('Remove Duplicates From Linked List', actualNoDupes, "work?", actualNoDupes[3] === expectedNoDupes[3]);

// const linkedList = new LinkedList(2).addMany([7,3,5]);
// const middle = middleNode(linkedList);

// console.log('Middle Node', middle, "work?", middle.value === 3)