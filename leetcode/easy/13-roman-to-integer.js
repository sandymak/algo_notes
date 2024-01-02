/* 

Time: O(n)
Space: O(1)

*/

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    let integer = 0;


    for (let i = s.length -1 ; i >= 0; i -=1 ) {
        const char = s[i];
        const previousChar = s[i+1];
        integer += determineCalculation(char, previousChar);
    }

  console.log('integer', integer)

    return integer;
};



function determineCalculation (currentCharacter, previousCharacter) {
  const ROMAN_TO_INT_CONVERSION = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
    if (currentCharacter === "I" && previousCharacter === "V" || 
    currentCharacter === "I" && previousCharacter === "X" || 
    currentCharacter === "X" && previousCharacter === "L"  || 
    currentCharacter === "X" && previousCharacter === "C" || 
    currentCharacter === "C" && previousCharacter === "D"|| 
    currentCharacter === "C" && previousCharacter === "M") {
         return -1 * ROMAN_TO_INT_CONVERSION[currentCharacter];
    }

            return ROMAN_TO_INT_CONVERSION[currentCharacter];
}


module.exports = {romanToInt}