const { LinkedListBase } = require('../utils');
/* 
You're given two Linked Lists of potentially unequal length. Each Linked List represents
a non-negative integer, where each node in the Linked List is a digit of that integer,
and the first node in each Linked list always represents the least significant digit of the integer.
Write a function that returns the head of a new Linked List that represents the sum of hte integers
represented by the two input Linked Lists.

Sample Input
linkedListOne = 2 -> 4 -> 7 -> 1
linkedListTwo = 9 -> 4 -> 5

Sample Output
1 -> 9 -> 2 -> 2
1749 + 549 = 1922


*/

// T: O(max(n,m)) time | S: O(max(n,m)) - where n is the length of the 
// first Linked List and m is the length of the second Linked List
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let resultList = null;
  let carryOver = 0;
  let listOneNode = linkedListOne;
  let listTwoNode = linkedListTwo;
  let currentResultNode = null;

  while (listOneNode !== null || listTwoNode !== null) {
    const operandOne = listOneNode ? listOneNode.value : 0;
    const operandTwo = listTwoNode ? listTwoNode.value : 0;
    const sum = operandOne + operandTwo + carryOver;
    let numberToAdd;
    
    if (sum > 9) {
      carryOver = Math.trunc(sum/10); // get the tens digit
      numberToAdd = sum % 10; // get the remainder aka ones digit 
    } else {
      carryOver = 0; // clean up the carryover from last time
      numberToAdd = sum;
    }
    
    const node = new LinkedListBase(numberToAdd);
    if (resultList === null) {
      resultList = node;
      currentResultNode = node;
    } else {
      currentResultNode.next = node; // add a node to the chain
      currentResultNode = node; // bring reference back to the previous node
    }

    // console.log('listOneNode', listOneNode);
    // console.log('listTwoNode', listTwoNode)
    
    listOneNode = listOneNode ? (listOneNode.next ? listOneNode.next : null) : null;
    listTwoNode = listTwoNode ? (listTwoNode.next ? listTwoNode.next : null) : null;
  }

  // Handle and remaining carryover
  if (carryOver) currentResultNode.next = new LinkedListBase(carryOver);

  return resultList;
}

function sumOfLinkedListsPretty (linkedListOne, linkedListTwo) {
  let node = new LinkedListBase(0);
  // initialize the list with a placeholder node.
  let resultListHead = node;
  let currentResultNode = node;
  let carryOver = 0;
  let listOneNode = linkedListOne;
  let listTwoNode = linkedListTwo;

  while (listOneNode !== null || listTwoNode !== null || carryOver !== 0) {
    const operandOne = listOneNode ? listOneNode.value : 0;
    const operandTwo = listTwoNode ? listTwoNode.value : 0;
    const sum = operandOne + operandTwo + carryOver;
 
    node = new LinkedListBase(sum % 10); // make a new node with the ones digit
    currentResultNode.next = node; // add a node to the chain
    currentResultNode = node; // bring reference back to the previous node
    
    carryOver = Math.trunc(sum/10); // get the tens digit

    // console.log('listOneNode', listOneNode);
    // console.log('listTwoNode', listTwoNode)
    
    listOneNode = listOneNode ? (listOneNode.next ? listOneNode.next : null) : null;
    listTwoNode = listTwoNode ? (listTwoNode.next ? listTwoNode.next : null) : null;
  }

  return resultListHead.next;
}

module.exports = {sumOfLinkedLists, sumOfLinkedListsPretty}
