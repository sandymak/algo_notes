/* 

Time: O(n^2) | Space O(n)
*/
function sortStack(stack) {
  if (!stack.length) return stack;
  
  const top = stack.pop();
  
  sortStack(stack);
  insertInSortedOrder(stack, top);

  // NEED to return the stack or else this entire function returns undefined
  return stack;
  
}

function insertInSortedOrder(stack, value) {
  // console.log('STACK before insert', stack, "\n THE VALUE =", value, "\n the last item", stack[stack.length -1])
  if (!stack.length || value >= stack[stack.length -1]) {
    stack.push(value);
    // console.log('STACK RETURNED!!!!!!!!!!!?', stack)
    //Need to return here because need to STOP the rest of the code from running (infinite loop)
    return stack;
  }

  const top = stack.pop();

  // how does the stack in here gets mutated...?
  insertInSortedOrder(stack, value);
  
  // console.log('stack BEFORE ADDING TOP', stack)
  stack.push(top);

  // console.log('stack AFTERTOP ====>', stack)
  // Adding this doesn't change anything in the stack... hmm... closure?
  return stack;
}

module.exports = sortStack;