const { MinMaxStack, MinMaxStackWithNode } = require('../../../medium/stack/minMaxStack');
const {balancedBrackets} = require('../../../medium/stack/balancedBrackets');
const sunsetViews = require('../../../medium/stack/sunsetViews');
const bestDigits = require('../../../medium/stack/bestDigits');


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

xdescribe("Balanced Braces", () => {
  it("Should return boolean to tell whether given string has balanced brackets", () => {
    const brackets1 = "";
    expect(balancedBrackets(brackets1)).toEqual(true);

    const brackets2 = "(((((({{{{{safaf[[[[[([)]safsafsa)]]]]]}}}gawga}}))))))";
    expect(balancedBrackets(brackets2)).toEqual(false);

    const brackets3 = "[((([])([]){}){}){}([])[]((())";
    expect(balancedBrackets(brackets3)).toEqual(false);
  })
})

xdescribe("Sunset Views", () => {
  it("Should return an array of indices of the buildings that can see the sunset: direction WEST", () => {
    const buildings = [1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8];
    const direction = 'WEST';
    const expectedArray = [0, 1, 2, 4, 5, 6, 10, 13];
    expect(sunsetViews(buildings, direction)).toEqual(expectedArray);
    
  });
  
  it("Should return an array of indices of the buildings that can see the sunset: direction EAST", () => {
    const buildings = [20, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8];
    const direction = 'EAST';
    const expectedArray = [0, 13, 14];
    expect(sunsetViews(buildings, direction)).toEqual(expectedArray);
    
  })
})

describe('Best Digits', () => {
  it ('should return the largest possible number after removing given number of digits', () => {
    const number = '11111111119999999999';
    const digits = 10;
    const expected = '9999999999';

    expect(bestDigits(number, digits)).toEqual(expected);


    const number2 = '462839';
    const digits2 = 2;
    const expected2 = '6839';
    expect(bestDigits(number2, digits2)).toEqual(expected2);
  })
  

})