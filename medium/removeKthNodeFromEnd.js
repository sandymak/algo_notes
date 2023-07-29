/* 
Write a function that takes in the head of a Singly linked List and an integer k
and removes the kth node from the end of the list.

The removal should be done in place, meaning that the original data structure
should be mutated (no new structure should be created).

Furthermore, the input head of the linked list should remain the head of the linked list
after the removal is done, even if the head is the node that's supposed to be removed.
In other words, if the head is the node that's supposed to be removed, your functions
should simply mutate its value and next pointer.

Note that your funciton doesn't need to return anything.

You can assume that the input Linked List will always have at lease 2 nodes and,
more specifically, at least k nodes.

Each LinkedList node has an integer value as awell as a next node pointed to the next
node in the list or to Node/null if it's the tail of the list.

Sample Input

head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 // the head node with value 0
k = 4

Sample Output
// No output required
// The 4th node from the end of the list (the node with the value 6) is removed.
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9


*/

// O(n) : T | O(1) : S   Get the length of the list & find the target 
function removeKthNodeFromEnd(head, k) {
  const listLength = getListLength(head);
  const target = listLength - k + 1;
  if (k <= 0 || target < 1) return;
  let index = 1;
  let currentNode = head;
  // For removing the head;
  if (target === 1) {
    if (listLength === 2) {
      head.value = head.next.value;
      head.next = null;
      return;
    } else {
      // console.log('run?')
      head.value = head.next.value;
      head.next = head.next.next;
    }
  }
  while(currentNode !== null) {
    // console.log('currentNode', currentNode.value)
    // console.log('index', index)
    if (index + 1 === target) {
      if (currentNode.next) {
        currentNode.next = currentNode.next.next;
        return;
      } else {
        currentNode.next = null;
        return;
      }
    }

    currentNode = currentNode.next;
    index += 1;
    
  }
  return;
}

function getListLength(node) {
  let length = 0;
  let currentNode = node;
  while (currentNode !== null) {
    length += 1;
    currentNode = currentNode.next;
  }
  return length;
}


module.exports = {removeKthNodeFromEnd}