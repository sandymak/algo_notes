/* 

Time: O(1) | Space: O(1) ==> max input is 2^32 bits 
*/
function validIPAddresses(string) {  
  const ipAddressesFound = [];
  console.log('original String', string)
  for (let i = 0; i < Math.min(string.length, 4); i += 1) {
    const currentIPAddressParts = ['', '', '', ''];
    currentIPAddressParts[0] = string.slice(0,i);
    if (!isValidPart(currentIPAddressParts[0])) continue;

    for (let j = i +1; j < i + Math.min(string - i, 4); j += 1) {
      currentIPAddressParts[1] = string.slice(i,j);
      if (!isValidPart(currentIPAddressParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string - j, 4); k += 1) {
        currentIPAddressParts[2] = string.slice(j,k);
        currentIPAddressParts[3] = string.slice(k);

        if (isValidPart(currentIPAddressParts[2]) && isValidPart(currentIPAddressParts[3])) {
          ipAddressesFound.push(currentIPAddressParts.join('.'));
        }
      }
    }
  }
  return ipAddressesFound;
}

function isValidPart (string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;

  return string.length === stringAsInt.toString().length;
}

module.exports = {validIPAddresses};