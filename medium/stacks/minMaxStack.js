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

const stack = new MinMaxStack();

stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(7);
  testMinMaxPeek(5, 7, 7, stack);
  stack.push(2);
  testMinMaxPeek(2, 7, 2, stack);
  chai.expect(stack.pop()).to.deep.equal(2);
  chai.expect(stack.pop()).to.deep.equal(7);
  testMinMaxPeek(5, 5, 5, stack);








module.exports = {MinMaxStack};