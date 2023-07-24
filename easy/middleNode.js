/* 
You're given a Linked List with at least one node. Write a function that returns the middle node of the LL.
If there are two middles nodes (ie an even length list), your function should retuirn the second of these.

linkedList = 2-7-3-5

result = 3-5 
// the middle could be 7 or 3, we return the second middle node

*/
function middleNode(linkedList) {
  const length = getLinkedListLength(linkedList);

  console.log('length', length)

  // this gets the half way point of linked list
  const stopIndex = Math.floor(length/2);
  let index = 0;
  let currentNode = linkedList;

  while (index !== stopIndex) {
    index += 1;
    currentNode = currentNode.next;
  }

  return currentNode;
}

function getLinkedListLength (linkedList) {
  let currentNode = linkedList.next;
  let length = 1;

  while (currentNode !== null) {
    length += 1;
    currentNode = currentNode.next;
  }

  return length;
}


module.exports = {middleNode}