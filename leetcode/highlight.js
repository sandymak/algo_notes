/* 

use indexOf

*/

function highlight (search, result) {
  let updated = '';
  let start = 0;
  const lowercasedSearch = search.toLowerCase();
  const lowercasedResult = result.toLowerCase()
  let foundIndex = lowercasedResult.indexOf(lowercasedSearch);

  console.log('foundIndex', foundIndex)
  
  while (foundIndex !== -1) {
    const beforeFound = result.slice(start, foundIndex);
    const found = result.slice(foundIndex, foundIndex + search.length);
    console.log('first segment', beforeFound);
    console.log('second segment', found);
    updated += `${beforeFound}<b>${found}</b>`
    start = foundIndex + search.length;
    foundIndex = lowercasedResult.indexOf(lowercasedSearch, start);
  }
  if (start + search.length !== result.length) {
    const copied = result.slice(start);
    updated += copied
  }
  return updated;
}

const inputs = [
  {
    search: "read",
    result: "I love reading",
    expected: "I love <b>read</b>ing",
    id: "Input 1"
  },
  {
    search: "dog",
    result: "Dog: dogs like to dOggy read dof ohdoggg",
    expected: "<b>Dog</b>: <b>dog</b>s like to <b>dOg</b>gy read dof oh<b>dog</b>gg",
    id: "Input 2: "
  },
  {
    search: "dog",
    result: "Dog: dogs like to dOggy read dof ohdog",
    expected: "<b>Dog</b>: <b>dog</b>s like to <b>dOg</b>gy read dof oh<b>dog</b>",
    id: "Input 3: "
  },
  {
    search: "dog",
    result: "I love to read",
    expected: "I love to read",
    id: "Input 4: "
  },

  
];

inputs.forEach(input => {
  const actual = highlight(input.search, input.result);

  console.log("HIGHLIGHT for", input.id, actual);
  console.log("is Passed???", actual === input.expected)
})



module.exports = {highlight}