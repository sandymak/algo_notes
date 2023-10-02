const { MinMaxStack, MinMaxStackWithNode } = require('../../../medium/stack/minMaxStack')


describe('Min Max Stack', () => {
  it('Should handle min, max, peek, push, pop functions', () => {
    
    function testMinMaxPeek(min, max, peek, stack) {
      expect(stack.getMin()).toStrictEqual(min);
      expect(stack.getMax()).toStrictEqual(max);
      expect(stack.peek()).toStrictEqual(peek);
    }
    
    const stack = new MinMaxStack();

    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(7);
    testMinMaxPeek(5, 7, 7, stack);
    stack.push(2);
    testMinMaxPeek(2, 7, 2, stack);
    expect(stack.pop()).toStrictEqual(2);
    expect(stack.pop()).toStrictEqual(7);
    testMinMaxPeek(5, 5, 5, stack);


  })
})

describe('Min Max Stack With Node', () => {
  it('Should handle min, max, peek, peekAll, push, pop functions', () => {
    
    function testMinMaxPeek(min, max, peek, stack) {
      expect(stack.getMin()).toStrictEqual(min);
      expect(stack.getMax()).toStrictEqual(max);
      expect(stack.peek()).toStrictEqual(peek);
    }
    
    const stack = new MinMaxStackWithNode();

    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(7);
    testMinMaxPeek(5, 7, 7, stack);
    stack.push(2);
    testMinMaxPeek(2, 7, 2, stack);
    stack.peekAll()
    expect(stack.pop()).toStrictEqual(2);
    expect(stack.pop()).toStrictEqual(7);
    testMinMaxPeek(5, 5, 5, stack);

    stack.peekAll()


  })
})