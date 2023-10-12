/* 
time: O(n) | Space O(n)

*/
function bestDigits(number, numDigits) {
  // console.log('number', number)
  const newNumber = [];
  for (const currentDigit of number) {
    // console.log('currentDigit', currentDigit)
    // console.log('last num', newNumber[newNumber.length - 1]);
    
    // Backtrack to make sure the previous stored numbers are large
    while (numDigits > 0 && newNumber.length > 0 && currentDigit > newNumber[newNumber.length -1]) {
      // console.log('newNumber first???? -->', newNumber.join(''));
      numDigits -= 1;
      // console.log('numDigits,', numDigits)
      
      newNumber.pop();
      // console.log('newNumber AFTERRRRRR???? 00000-->', newNumber.join(''));
    }
    newNumber.push(currentDigit);
  }
  while (numDigits > 0) {
    numDigits -= 1;
    newNumber.pop();
  }

  return newNumber.join('');
}


module.exports = bestDigits