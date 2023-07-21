/* 
You're given a Node class that has a name and an array of optional children nodees.
When put together, nodes form an acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, 
traverses the tree using the Depth-first search approach (specifically navigating the tree from left to right)
stores all the nodes' names in the input array, and returns it.

graph =          A
              /  |  \
            B    C    D
          /   \      /  \
         E     F    G    H
              / \    \
             I   J    K

sample output = ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"];

Approach:

1. Start with first node's children & then recursively call dfs on its children...

*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    this.dfsHelper(this.children, array);
    return array;
  }
  // T: O(v + e) | S: O(v)
  dfsHelper(children, array) {
    if (children.length <= 0) return;
    for (let i = 0; i < children.length; i += 1) {
      const node = children[i];
      array.push(node.name);
      this.dfsHelper(node.children, array);
    }
    return;
  }

  dfs(array) {
        array.push(this.name);
    for (const child of this.children) {
      // USING the child's method will ensure we maintain the "this" context
      // to referencing the child's children vs parent's children
      // GENIUS!!!
      child.depthFirstSearch(array);
    }
    return array
  }
}

  const graph = new Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');

// console.log('DepthFirstSearch', graph.depthFirstSearch([]));
// console.log('DepthFirstSearch', graph.dfs([]));

module.exports = {graph};