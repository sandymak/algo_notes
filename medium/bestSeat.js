/* 
You walk into a theatre you're about to see a show. The usher within the theatre walks you to your row
and mentiones you're allowed to sit anywhere within the given row. Naturally, you'd like to sit in the 
seat that gives you the most space. You also would prefer this space to be evely distributed on wither side
of you (ie if there are three empty seats  in a row, you would prefer to sit in the middle of those three
seats).

Given the theatre row represented as an integer array, return the seat index of where you would sit. 
Ones represent occupied seats and seroes represent empty seats.

you may assume that someone is always sitting in the first and last seat of the row. Whenever there are
two equally goo seats, you should dit in the seat with the lower index. If there's no seat in, return -1.
The given array will always have a length of at least one and contain only ones and zeroes.

input = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1];
expects = 3;


T: O(n) | S: O(1)
*/
function bestSeat(seats) {
  if (seats.length < 3) return -1;

  let maxEmptySpace = 0;
  let nonEmptySeat = null;
  let bestSeatIndex = -1;

  for (let i = 0; i < seats.length; i += 1) {
    if (seats[i] === 1) {
      if (nonEmptySeat === null) {
        nonEmptySeat = i;
        continue;
      } else {
        const emptySpace = i - nonEmptySeat - 1;
        if (emptySpace > maxEmptySpace) {
          maxEmptySpace = emptySpace;
          bestSeatIndex = nonEmptySeat + Math.floor((i - nonEmptySeat)/2)
   
        } 
        nonEmptySeat = i;
      }
    }
  }
  return bestSeatIndex;
}

module.exports = {bestSeat};