/* 
Merging Linked Lists

You're given two Linked Lists of potentially unequal lengths. 
These Linked Lists potentially merge at a shared intersection node. 
Write a function that returns the intersection node or returns None/ null if there is no intersections.

Sample Input:
linkedListOne = 2 -> 3 -> 1 -> 4
linkedListTwo = 8 -> 7 -> 1 -> 4

Sample Output 
1 -> 4 // the list intersects at the ndoe with value 1

// Assumptions that merging means a node.value & node.next are the same
// Approach: Brute force: Create nest loops to iterate through each until we have found an intersection point
T: O(n*m) | S: O(1) - where n & m are the lengths of linked list one & two respectively
*/

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currentListOneNode = linkedListOne;

  while (currentListOneNode !== null) {
    
  let currentListTwoNode = linkedListTwo;
    
    while (currentListTwoNode !== null) {
      // console.log('currentListOneNOde', currentListOneNode)
      // console.log('currentListTwoNOde', currentListTwoNode)
      if (currentListOneNode.value === currentListTwoNode.value && 
          currentListOneNode.next === currentListTwoNode.next) return currentListOneNode;
      currentListTwoNode = currentListTwoNode.next;
    }
    currentListOneNode = currentListOneNode.next;
  }
  return null;
}

/* 
MORE PERFORMANT SOLUTION: Create a set to store one list of nodes --> This doesn't work!

T: O(n+m) | S: O(n)

*/
function mergingLinkedListsUsingSet(linkedListOne, linkedListTwo) {
  const listOneNodes = new Set();
  let currentListOneNode = linkedListOne;
  while (currentListOneNode !== null) {
    listOneNodes.add(currentListOneNode);
    currentListOneNode = currentListOneNode.next;
  }

  console.log(listOneNodes)

  let currentListTwoNode = linkedListTwo;
  while (currentListTwoNode !== null) {
    if (listOneNodes.has(currentListTwoNode)) return currentListTwoNode;
    currentListTwoNode = currentListTwoNode.next
  }
  return null;
}

/* 
LENGTHS: We run with the assumption that an intersection found
means the rest of the lengths of the 2 lists are the same.

If we find hte length of each list,
Remove the differrence fro the longer list (if any)
Start the loop at the sampe point for both lists, we will 
eventually find an intersection in that length. If not, there are no intersections
*/
function mergingLinkedListsComparingLengths(linkedListOne, linkedListTwo) {
  const listOneLength = getLength(linkedListOne);
  const listTwoLength = getLength(linkedListTwo);
  const difference = Math.abs(listOneLength - listTwoLength);
  console.log('1, 2, diff', listOneLength, listTwoLength, difference)
  let listOneNode, listTwoNode;

  if (difference === 0) {
    listOneNode = linkedListOne;
    listTwoNode = linkedListTwo;
  } else if (listOneLength > listTwoLength) {
    listOneNode = getNodeAfterTarget(linkedListOne, difference);
    listTwoNode = linkedListTwo;
  } else {
    listOneNode = linkedListOne;
    listTwoNode = getNodeAfterTarget(linkedListTwo, difference);
  }

  // console.log('listOneNode', listOneNode);
  // console.log('listTwoNode', listTwoNode);


  while (listNodeOne !== listNodeTwo) {
    listOneNode = listOneNode.next;
    listTwoNode = listTwoNode.next;
  }

  return listNodeOne;
  
}

function getLength(list) {
  let currentNode = list;
  let length = 1;
  while (currentNode !== null) {
    length += 1;
    currentNode = currentNode.next;
  }
  return length;
}

function getNodeAfterTarget(node, target) {
  let currentNode = node;
  let index = 1;
  while (index !== target && currentNode !== null) {
    index += 1;
    currentNode = currentNode.next;
  }
  return currentNode.next;
}

/* 
  Based on the assumption that if lists intersect, the intersected
  lengths will be the same. 
  
  CYCLES: The idea is that we can cycle through the 2 lists 
  once per list to get the same end point of the list

*/
function mergingLinkedListsUsingTwoNodes(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne;
  let currentNodeTwo = linkedListTwo;


  while(currentNodeOne !== currentNodeTwo) {
  console.log('ONEEEEEEEEEEEEE', currentNodeOne? currentNodeOne.value : currentNodeOne)
  console.log('TWO ', currentNodeTwo? currentNodeTwo.value : currentNodeTwo)
    if (currentNodeOne === null) {
      currentNodeOne = linkedListTwo;
    } 
    if (currentNodeTwo === null) {
      currentNodeTwo = linkedListOne;
    } 
    if (currentNodeOne.value === currentNodeTwo.value) {
      return currentNodeOne;
    }
    currentNodeTwo = currentNodeTwo.next;
    currentNodeOne = currentNodeOne.next;
    
  }

  console.log(currentNodeOne);

  return currentNodeOne
}

module.exports = { 
  mergingLinkedLists, 
  mergingLinkedListsUsingTwoNodes, 
  mergingLinkedListsUsingSet, 
  mergingLinkedListsComparingLengths
};