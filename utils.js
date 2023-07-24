class BinaryTreeBase {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree extends BinaryTreeBase {
  constructor(value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

// DFS
function treeTraverse (node, array = []) {
  if (!node) return array;
  array.push(node.value);
  treeTraverse(node.left, array);
  treeTraverse(node.right, array);
  return array;
  
}

class LinkedListBase {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList extends LinkedListBase {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}



module.exports = {BinaryTree, treeTraverse, LinkedList} ;