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

function treeTraverse (node, array = []) {
  if (!node) return array;
  array.push(node.value);
  treeTraverse(node.left, array);
  treeTraverse(node.right, array);
  return array;
  
}
module.exports = {BinaryTree, treeTraverse} ;