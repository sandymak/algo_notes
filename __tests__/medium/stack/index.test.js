const { MinMaxStack, MinMaxStackWithNode } = require('../../../medium/stack/minMaxStack');
const {balancedBrackets} = require('../../../medium/stack/balancedBrackets');


xdescribe('Min Max Stack', () => {
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

   it('With Node | Should handle min, max, peek, peekAll, push, pop functions', () => {
    
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

describe("Balanced Braces", () => {
  it("Should return boolean to tell whether given string has balanced brackets", () => {
    const brackets1 = "";
    expect(balancedBrackets(brackets1)).toEqual(true);

    const brackets2 = "(((((({{{{{safaf[[[[[([)]safsafsa)]]]]]}}}gawga}}))))))";
    expect(balancedBrackets(brackets2)).toEqual(false);

    const brackets3 = "[((([])([]){}){}){}([])[]((())";
    expect(balancedBrackets(brackets3)).toEqual(false);
  })
})