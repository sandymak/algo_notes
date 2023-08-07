/* 
Write a BST class for a Binary Search Tree. The class should support: 
- inserting values with the insert method
- removing values with the remove method; this method should only remove the 
  first instance of a given value.
- Searching for values with the contains method

Note that you can't remove values from a single node tree. In other words, calling the 
remove method on a single node tree should simply not do anything.

Each BST node has an integer value, a left child node, and a right child node. 
A node is said to be a valid BST node if and only if it satisfies the BST property: 
1) its value is strictly greater than the values of every node to its left;
2) its values is less than or equal to the values of every node to its right;
3) and its children nodes are either valid BST nodes themselves or null.

// Assume the following BST has already been created:
           10
         /    \
        5      15
      /   \   /   \
     2     5 13    22
    /          \
   1            14

// All operations below are performed sequentially
- insert (12):
           10
         /    \
        5      15
      /   \   /   \
     2     5 13    22
    /       /  \
   1      12    14

- remove (10):
           12
         /    \
        5      15
      /   \   /   \
     2     5 13    22
    /          \
   1            14

- contians(15): true
*/
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value)
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    if (value < this.value) {
      if (!this.left) return false;
      return this.left.contains(value)
    } else if (value > this.value) {
      if (!this.right) return false;
      return this.right.contains(value);
    } 
    return true;
  }

  findMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.findMinValue()
    }
  }

  findMaxValue() {
    let currentNode = this;
    if (!currentNode) return null;
    console.log('currentNode.val', currentNode.value)
    
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  remove(value, parent = null) {
    // When we know we need to look at the left side of tree
    if (value < this.value) {
      if (this.left) {
        // Continue to traverse left
        this.left.remove(value, this)
      }   
    // When we know we have to move to the right of the tree
    } else if (value > this.value) {
        if (this.right) {
          this.right.remove(value,this)
        }
      // WHEN we found the target
    } else {
      // If the target has both children
      if (this.left && this.right) {
        // We get the smallest value node on the right sub tree
        this.value = this.right.findMinValue();
        // We remove that smallest value 
        this.right.remove(this.value, this);
        // If we are removing a root node with one child
      } else if (!parent) {
        // If we try to remove a root node with left child only
        /* REMOVE 5
                  5      ====>             2
                 /                        /  \
                2                        1    3     
              /  \
             1    3
        */
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
          // If we try to remove a root node with right child only
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // This is a single-node tree; do nothing;
        }
        // If target node has a parent node & target is the child, 
        // then reassign child's children to parent
        /*  Remove 3
                5                    5
               /                   /
              3                   4
               \                   \
                4                   5
                 \
                  5
      
        */
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right;
      }
    }
    
    return this;
   
}

  getNodesToArray(array = []) {
    array.push(this.value);
    if (!this.left && !this.right) return array;
    if (this.left) this.left.getNodesToArray(array);
    if (this.right) this.right.getNodesToArray(array);
    return array;
  }
};

module.exports = { BST };