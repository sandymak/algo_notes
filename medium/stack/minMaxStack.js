/* 
Write a MinMaxStack class for a Min Max Stack. The class should suppoert:
- Pushing and popping calues on and off the stack
- Peeking at the value at the top of the stack
- Getting both the minimum and maximum values in the stack at any given point in time.

All class methods, when considered independently, should run in constant time and space.

*/

// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length -1];
  }

  peekAll() {
  
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    let newMinMax = {min: number, max: number};
    if (this.minMaxStack.length !== 0) {
      const currentMin = this.minMaxStack[this.minMaxStack.length - 1].min;
      const currentMax = this.minMaxStack[this.minMaxStack.length - 1].max;
      newMinMax.min = Math.min(newMinMax.min, currentMin);
      newMinMax.max = Math.max(newMinMax.max, currentMax);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }

  
}

/* 
  Solution without a secondary stack

*/

// Feel free to add new properties and methods to the class.
class MinMaxStackWithNode {
  constructor () {
    this.stack = [];
  }
  
  peek() {
    return this.stack[this.stack.length - 1].value;
  }

  peekAll() {
    console.log('Stack Nodes=', this.stack)
  }

  pop() {
    return this.stack.pop().value;
  }

  push(number) {
    let newNode = new Node(number, number, number)
    if (this.stack.length > 0) {
      const currentMin = this.stack[this.stack.length - 1].getMin();
      const currentMax = this.stack[this.stack.length - 1].getMax();
      const newMin = Math.min(currentMin, number);
      const newMax = Math.max(currentMax, number);
      newNode.setMin(newMin);
      newNode.setMax(newMax);
    }
    this.stack.push(newNode);
  }

  getMin() {
    return this.stack[this.stack.length -1].getMin();
  }

  getMax() {
     return this.stack[this.stack.length -1].getMax();
  }


}

class Node {
  constructor(value, min, max) {
    this.value = value;
    this.min = min;
    this.max = max;
  }

  setMin(number) {
    this.min = number;
  }

  setMax(number) {
    this.max = number;
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }
}


module.exports = {MinMaxStack, MinMaxStackWithNode};