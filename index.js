// UTILS
const {BinaryTree, treeTraverse, LinkedList, getNodesInArray} = require('./utils');

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
const {getNthFib} = require('./easy/fibonacci');
const {productSum} = require('./easy/productSum');


// MEDIUM
const {threeNumberSum, threeNumberSumAlt} = require("./medium/threeNumberSum");
const {removeKthNodeFromEnd} = require('./medium/removeKthNodeFromEnd');
const {sumOfLinkedLists, sumOfLinkedListsPretty} = require('./medium/sumOfLinkedLists');
const { mergingLinkedListsUsingTwoNodes, mergingLinkedListsUsingSet } = require('./medium/mergingLinkedLists');
const { BST } = require('./medium/bstConstruction');
const { getPermutations, getPermutations2 } = require('./medium/permutations');
const { maxSubsetSumNoAdjacent, maxSubsetSumNoAdjacent2 } = require('./medium/maxSubsetSumNoAdjacent');
const { smallestDifference, smallestDifferenceTwoPointers } = require('./medium/smallestDifference');
const {moveElementToEnd} = require('./medium/moveElementToEnd');
const {isMonotonic} = require('./medium/monotonicArray');
const {spiralTraverse} = require('./medium/spiralTraverse');
const {longestPeak, longestPeakUgly} = require('./medium/longestPeak');
const {arrayOfProducts, arrayOfProductsPerformant} = require('./medium/arrayOfProducts');
const {firstDuplicateValue, firstDuplicateValueTrick} = require('./medium/firstDuplicateValue');
const {bestSeat} = require('./medium/bestSeat');
const {zeroSumSubarray} = require('./medium/zeroSumSubarray');
const {missingNumbers} = require('./medium/missingNumbers');
const {majorityElement} = require('./medium/majorityElement');

// LEETCODE 
const leetCode = require("./leetcode");

// EASY PROBLEMS
const easy = require('./easy')

// MEDIUM PROBLEMS
const medium = require('./medium');


/* 
 * 
 * BINARY TREES
 *
*/

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
 * 
 * UNCOMMENT OUT BELOW TO RUN PROBLEMS
 *
*/

// const bst = new BinaryTree(10).insert([5,15,2,5,13,22,1,14]);
// console.log('BST>?', treeTraverse(bst))

// const bstI12 = findClosestValueInBstIterative(bst, 12);

// console.log('Find Closest Value in BST Iterative', bstI12, "works?", bstI12 === 13);

// const bstR12 = findClosestValueInBstRecursive(bst, 12);
// console.log('Find Closest Value in BST Recursive', bstR12, "works?", bstR12 === 13);

/* 
 * 
 * EASY - RECURSION
 *
*/

// ~~~~~~~~~~~~~~~~~~~ GET NTH FIBINOCCI
// const fib5 = getNthFib(5)
// console.log('Fibonacci@5', fib5, fib5 === 3, "0,1,1,2");
// const fib = getNthFib(6)
// console.log('Fibonacci@6', fib, fib === 5, "0,1,1,2,3");

// ~~~~~~~~~~~~~~~~ GET PRODUCT SUM
// const sum = productSum([5,2,[7,-1],3,[6,[-13,8],4]]);
// console.log("Product Sum", sum, "huh?", sum === 12)


/* 
 * 
 * MEDIUM - LINKED LISTS
 *
*/

// ---------REMOVE DUPLICATES FROM LINKED LIST

  // const sortedLinkedList = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
  // const expectedNoDupes = new LinkedList(1).addMany([3, 4, 5, 6]).getNodesInArray();
  // const actualNoDupes = removeDuplicatesFromLinkedList(sortedLinkedList).getNodesInArray();

  // console.log('Remove Duplicates From Linked List', actualNoDupes, "work?", actualNoDupes.join() === expectedNoDupes.join());

// ---------- MIDDLE NODE

// const linkedList = new LinkedList(2).addMany([7,3,5]);
// const middle = middleNode(linkedList);

// console.log('Middle Node', middle, "work?", middle.value === 3)

// -------- REMOVE Kth NODE FROM END

// const linkedList10 = new LinkedList(0).addMany([1,2,3,4,5,6,7,8,9]);
// const expectedListWithKRemoved = new LinkedList(0).addMany([1,2,3,4,5,7,8,8]).getNodesInArray();

// removeKthNodeFromEnd(linkedList10, 4);
// const actualListWithKRemoved = linkedList10.getNodesInArray();

// console.log('Remove Kth Node from End', actualListWithKRemoved, 'work?', expectedListWithKRemoved.join() === actualListWithKRemoved.join())

// ------------- SUM OF LINKED LISTS
// const L111 = new LinkedList(2).addMany([4, 7, 1]);
// const L112 = new LinkedList(9).addMany([4,5]);
// const expectedSumOfLinkedLists = new LinkedList(1).addMany([9, 2, 2]).getNodesInArray();
// const actualSumOfLinkedLists = sumOfLinkedLists(L111, L112);
// const actualSumInArray = getNodesInArray(actualSumOfLinkedLists)

// console.log('Sum of Linked Lists', actualSumInArray, 'work?', expectedSumOfLinkedLists.join() === actualSumInArray.join())

// const actualSumOfLinkedListsPretty = sumOfLinkedListsPretty(L111, L112);
// const actualSumInArray2 = getNodesInArray(actualSumOfLinkedLists)

// console.log('Sum of Linked Lists', actualSumInArray2, 'work?', expectedSumOfLinkedLists.join() === actualSumInArray2.join())

// -------------- MERGING LINKED LISTS
// const L113 = new LinkedList(2).addMany([5,3,1,4]);
// const L114 = new LinkedList(8).addMany([7,1,4]);
// const expectedIntersection = new LinkedList(1).addMany([4]).getNodesInArray();
// const actualIntersection = mergingLinkedListsUsingTwoNodes(L113, L114);
// const actualIntersectionInArray = getNodesInArray(actualIntersection);

// console.log('Merging Linked Lists', actualIntersectionInArray, 'huh?', actualIntersection, "work?", actualIntersectionInArray.join() === expectedIntersection.join())


// ------------------ CONSTRUCTING BST

/* 
CASES TO WORRY ABOUT
 node.left.value < node.value <= node.right.value
1) When the value < node.value --> move left
2) if the value > node.value --> move right
3. if ( value === node.value) // TRICKY
   a) if (node.left & node.right) // has both children, find/swap with smallest value in right subtree & remove it
       node.value = node.right.getMinValu();
       node.remove(node.value, node);
    b) if (!parent) // if removing root node with one child
       I) if has left child,
           - change current node value to left chile value
           - change current node right to point to left child right (if any)
           - change current node left to point to left child left (if any)
        II) If has right child,
           - change current node value to right child value
           - change current node right to point to right child right (if any)
           - change current node left to point to right child left (if any)
    c) if parent // if removing node has parent & self as child
        I) parent.left === this
          - parent.left = this.left ? this.left : this.right
        II) parent.right === this
          - parent.left = this.left ? this.left : this.right
*/

// const root = new BST(10);
// root.left = new BST(5);
// root.left.left = new BST(2);
// root.left.left.left = new BST(1);
// root.left.right = new BST(5);
// root.right = new BST(15);
// root.right.left = new BST(13);
// root.right.left.right = new BST(14);
// root.right.right = new BST(22);

// console.log('BST BEFORE', root.getNodesToArray([]));
// console.log('Insert 12, 9, 209')
// root.insert(12);
// root.insert(9);
// root.insert(209);
// console.log('BST CONTAINS 12', root.contains(12));
// console.log('BST CONTAINS 9', root.contains(9));
// console.log('BST CONTAINS 209', root.contains(209));

// console.log('Remove 209');
// root.remove(209);
// console.log('BST CONTAINS 209', root.contains(209));
// console.log('BST POST INSERTS', root.getNodesToArray([]));
// console.log('Remove 10: root');
// root.remove(10)
// const bstNodes = root.getNodesToArray([])

// console.log('BST AFTER', bstNodes, bstNodes.join() === '12,5,2,1,5,9,15,13,14,22');

// const root2 = new BST(10);
// root2.insert(5);
// root2.insert(15);

// root2.remove(5);
// root2.remove(15);
// root2.remove(10);
// console.log(root2.getNodesToArray())


/* 
 * 
 * MEDIUM - RECURSION
 *
*/

// -------------------- GET PERMUTATIONS
// const options = [1,2,3];
// const permutations = getPermutations(options);
// const options2 = [1,2,3,4]
// const permutations2 = getPermutations2(options2)

// console.log('GET Permutations', permutations)
// console.log('GET Permutations 2', permutations2)

/* 
 * 
 * MEDIUM - DYNAMIC PROGRAMMING
 *
*/
// -------------------- GET MAX SUBSET SUM NO ADJACENT
// const array = [75,105,120,75,90,135];
// const maxSum = maxSubsetSumNoAdjacent(array);
// const maxSum2 = maxSubsetSumNoAdjacent2(array);
// console.log('Get Max Subset Sum No Adjacent', maxSum, maxSum2, maxSum === 330)


/* 
 * 
 * MEDIUM - ARRAYS
 *
*/
// ================= SMALLEST DIFFERENCE
// const arrayOne = [-1,5,10,20,28,3];
// const arrayTwo = [26,134,135,15,17];
// const smallestPairs = smallestDifferenceTwoPointers(arrayOne, arrayTwo);

// console.log('Smallest Difference', smallestPairs, 'true?', smallestPairs.join() === '28,26')

// ================= MOVE ELEMENT TO END
// const arrayToMove = [2,1,32,2,2,3,4,2];
// const toMove = 2;
// const expectedMovedArray = [4,1,32,3,2,2,2,2];
// const movedArray = moveElementToEnd(arrayToMove, toMove);

// console.log('Move Element To End', movedArray , 'true?', movedArray.join() === expectedMovedArray.join())

// ================= MONOTONIC ARRAY
// const monotonicArray = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

// console.log("IS MONOTONIC ARRAY", isMonotonic(monotonicArray) === true)

// ================= SPIRAL TRAVERSE
// const matrix = [[1,2,3,4,5], [12,13,14,15,6], [11,10,9,8,7]];
// const matrix2 = [[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]];
// const expectedTraversedSpiral = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const expectedTraversedSpiral2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// const traversedMatrix = spiralTraverse(matrix);
// const traversedMatrix2 = spiralTraverse(matrix2);

// console.log('Spiral Traverse 1:', traversedMatrix, "huh?", traversedMatrix.join() === expectedTraversedSpiral.join());
// console.log('Spiral Traverse 2:', traversedMatrix2, "huh?", traversedMatrix2.join() === expectedTraversedSpiral2.join());

// ================= LONGEST PEAK
// const arrayWithPeaks =  [1,2,3,3,4,0,10,6,5,-1,-3,2,3];
// const peakLength = longestPeak(arrayWithPeaks);
// const peakLengthUgly = longestPeakUgly(arrayWithPeaks);

// console.log('Get Longest Peak:', peakLength, "is true?", peakLength === 6)
// console.log('Get Longest Peak:', peakLengthUgly, "is true?", peakLengthUgly === 6)

// ================= ARRAY OF PRODUCTS
// const array = [5,1,4,2];
// const expectedProducts = [8, 40, 10, 20];
// const products = arrayOfProductsPerformant(array);

// console.log('Get Array of Products', products, "is true?", products.join() === expectedProducts.join())


// ================= First Duplicate Value
// const array = [2,1,5,3,3,2,4];
// const duplicateVal = firstDuplicateValueTrick(array);

// console.log('First Duplicate Value', duplicateVal, "is true?", 3 === duplicateVal) 


// ================= BEST SEAT
// const theatreRow = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1];
// const bestSeatIndex = bestSeat(theatreRow);

// console.log('Best Seat = ', bestSeatIndex, "true?", bestSeatIndex === 3);

// ================= ZERO SUM SUBARRAY
// const array = [-2,2]
// const hasZeroSumSubarray = zeroSumSubarray(array);

// console.log('Has Zero Sum Subarray? = ', hasZeroSumSubarray, "expected", hasZeroSumSubarray === true)

// ================= MISSING NUMBERS
// const numbers =  [4,5,1,3];
// const missingNums = missingNumbers(numbers);
// const expectedMissingNums = [2,6];
// console.log('Get Missing Numbers = ', missingNums, "is expected?", missingNums.join() === expectedMissingNums.join())


// ================= MAJORITY ELEMENT
const elements = [3,2,2,2,1,2,1];
const majority = majorityElement(elements);

// console.log('Get Majority Element = ', majority, "isExpected?", majority === 2)

