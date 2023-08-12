function convert(num) {
  console.log('number', num)
  if (num === 0) return 'zero';
  return convertToMillions(num);
}

function convertToMillions (num) {
  const million = 1000000
  if (num >= million) {
    return `${convertToOnes(Math.floor(num / million))} million ${convertToThousands(num%million)}`
  } else {
    return convertToThousands(num)
  };  
}
// Handle the 3 thousandth placements
function convertToThousands (num) {
  const thousand = 1000
  if (num >= thousand) {
    return `${convertToHundreds(Math.floor(num/thousand))} thousand ${convertToHundreds(num%thousand)}`
  } else {
    return convertToHundreds(num)
  }
}

// Handle the hundreds
function convertToHundreds(num) {
  const hundred = 100;
  if (num >= hundred) {
    const tensPlace = num % hundred > 0 ? convertToTens(num%hundred) : '';
    return `${convertToOnes(Math.floor(num/ hundred))} hundred ${tensPlace}`
  } else {
    return convertToTens(num)
  }
}

function convertToTens(num) {
  const ten = 10;
  const teens =  ["ten", 'eleven', "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const tens = ['', '', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  if (num < 10) return convertToOnes(num);
  if (20 > num || num >= 10) return teens[num-ten];
  return `${tens[Math.floor(num/ten)]} ${convertToOnes(num%ten)}`
}

function convertToOnes(num) {
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return ones[num]
}



module.exports = {convert}