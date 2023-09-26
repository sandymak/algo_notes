/* 
Time: O(n) | Space O(1)

*/
function oneEdit(stringOne, stringTwo) {
  let editCounts = 0;
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (lengthOne === lengthTwo) {
    let index = 0;
    while(index < stringOne.length) {
      if(stringOne[index] !== stringTwo[index]) editCounts += 1;
      if (editCounts > 1) return false;
      index += 1;
    }
    
  } else {
    if (Math.abs(lengthOne - lengthTwo) > 1) return false;
    const longerString = lengthOne > lengthTwo ? stringOne : stringTwo;
    const shorterString = lengthOne > lengthTwo ? stringTwo : stringOne;

    for (let i = 0; i < longerString.length; i += 1) {
      if (shorterString[i] === undefined) editCounts += 1;
      if (longerString[i] !== shorterString[i]) {
        if (longerString[i + 1] !== shorterString[i]) editCounts += 1;
        console.log('editCount', editCounts)
      } 
      if (editCounts > 1) return false;
    }
  }

  return true;
}

module.exports = {oneEdit}