/* 
In order to solve this problem, I will treat each number is a string and manipulate them as digits.

1) determine which numberString is longer
2) have a singular while loop to go through each digit in the longer and shorter string simultaneously. MUST handle the difference in length aka difference in index
3) add the digits and carryover if sum > 9, get the ones digit of the sum and carryover the tens digit. Treat them as number
4) append the ones digit to the result string.... this is reversed....
5) make sure to chack when the carryover is leftover...


*/

// function addLarge(first, second) {
//   const longerString = first.length > second.length ? first : second;
//   const shorterString = first.length > second.length ? second : first;
//   console.log('first', first, "second", second)

//   let result = null;
//   let carryover = 0;
//   let longerStringIndex = longerString.length - 1;
//   let shorterStringIndex = shorterString.length - 1;

//   while (longerStringIndex >=0) {
//     console.log('first', longerString[longerStringIndex]);
//     console.log('seconf', shorterString[shorterStringIndex]);
//     const firstDigit = Number(longerString[longerStringIndex]) || 0;
//     const secondDigit = Number(shorterString[shorterStringIndex]) || 0;
//     const sum = firstDigit + secondDigit + carryover;
//     console.log('firstDigit', firstDigit);
//     console.log('secondDigit', secondDigit);
//     console.log('carryover', carryover);
//     console.log('sum', sum);
//     console.log('result', result)
//     if (sum > 9) {
//       const remainder = sum % 10;
//       carryover = Math.floor(sum/10);
//       result = `${remainder}${result === null ? ' ' : result}`;
//       console.log('remainder????', remainder, "carryover?????", carryover, "result=", result)
//     } else {
//       console.log(`sum? ${sum}, result? ${result}`)
//       result = `${sum}${result === null ? ' ' : result}`;
//       carryover = 0;
//     }
//     longerStringIndex -=1;
//     shorterStringIndex -=1;
//   }



//   console.log(`BEFOREEEE ${first} + ${second} = ${result}`);

//   if (carryover > 0) result = `${carryover}${result}`;

//   console.log(`${first} + ${second} = ${result}`);
//   return result;
// }


/* 
Super elegant, array solution to a stack problem... this is glorious!

*/
function addLarge (first, second) {
  const firstToArray = first.split('');
  const secondToArray = second.split('');
  let carryover = 0;
  let result = '';

  while (firstToArray.length || secondToArray.length || carryover) {
    const firstDigit = Number(firstToArray.pop()) || 0;
    const secondDigit = Number(secondToArray.pop()) || 0;
    const sum = firstDigit + secondDigit + carryover;

    if (sum > 9) {
      const remainder = sum % 10;
      carryover = Math.floor(sum/10);
      result = `${remainder}${result}`;
    } else {
      result = `${sum}${result}`
      carryover = 0
    }
  }
    console.log(`${first} + ${second} = ${result}`);
  return result;
}


module.exports = {addLarge}