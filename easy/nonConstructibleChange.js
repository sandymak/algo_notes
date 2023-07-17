function nonConstructibleChange(coins) {
  /* 
  Given an array of positive integers representing the values of coins in your posession, 
  write a funciton that returns the minimum amounf of change (min sum of money)
  that you cannot create. 
  Coins are positive integers & are not necessarily unique

  [5,7,1,1,2,3,22]

  20


  plan: 
  1, initiate minimumSum = 1;
  2. initiate allCoinSums = [0];
  4. stopIndex = allCoinSums.length - 1;

  sort the array in asc order
  loop through the array
  for each elem, 
     stopIndex = allCounSums.length -1;
     loop through all countsSums
        elem += allCoinSums(i)
        is sum > lowest return lowest
        if sum === lowest, lowest += 1
        allCoinsSum.push(sum)
  return minimunSum
  */

  let minimumSum = 1;
  let coinSums = [0];

  

  const sortedCoinsASC = coins.sort((a,b) => a-b);
  console.log('sorted', sortedCoinsASC)

  /*
   [1,1,2,3,5,22]
          i
                                stop
   coinsSums = [0,1,1,2, 2, 3,3,4,3, 4, 4, 5]
                    y
   sum = 4; 
   stop = 8;
   min = 5;

   T: O(nlogn) | S: O(1)
  */
  for (let i = 0; i < sortedCoinsASC.length; i += 1) {
    let currentCoinValue = sortedCoinsASC[i];
    let stopIndex = coinSums.length;
    for (let y = 0; y < stopIndex; y += 1) {
      let currentSum = currentCoinValue + coinSums[y];
      console.log(`i ${i} currentCoinVal ${currentCoinValue}, currentSum ${currentSum} miniSum ${minimumSum}`)
      if (currentSum > minimumSum) return minimumSum;
      if (currentSum === minimumSum) minimumSum += 1;
      coinSums.push(currentSum)
      console.log('coinSums', coinSums)
      
    }
  }
  
  return minimumSum
}

const c =   [5,7,1,1,2,3,22];

// console.log("NonConstructibleChange", nonConstructibleChange(c));

module.exports = {nonConstructibleChange}
