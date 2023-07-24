/* 
You're given the head of a Singly Linked List whose nodes are in sorted order with respect
to their values. Write a function that returns a modified version of the Linked List that doesn't
contain any nodes with duplicate values. The Linked List should be modified in place 
(ie, you shouldn't create a brand new list), 
and the modified Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value, as well as a next node pointing to the next node
in the list or the None / null if its the tail of the list


const linkedLis = 1 -> 2 ->3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with val 1

expected = 1 -> 2 -> 3 -> 4 -> 5 -> 6

T: O(n) | S O(1)
*/

function removeDuplicatesFromLinkedList(linkedList) {
  let previous = linkedList;
  let current = linkedList.next;
  while (current !== null) {
    if (previous.value === current.value) {
      if (current.next) {
        // remove all succesive nodes that have the same values as the current node
        // remove the reference to "current" duplicated value
        // make the next node to a skipped node
        previous.next = current.next;
      } else {
        // found a tail, & make the next node a tail
        previous.next = null;
      }
      // continue LL traversal to "next next"
      current = previous.next
    } else {
      previous = current;
      current = current.next;
    }
  }
  return linkedList;
}


module.exports = {removeDuplicatesFromLinkedList}