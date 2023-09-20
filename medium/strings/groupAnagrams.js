/* 

T: O(w*n*w) | S O(w*n) where w is length of words & n is length of longest word
*/
function groupAnagrams(words) {
  if (words.length === 0) return [];
  if (words.length === 1) return [[words[0]]];
  let records = [];
  let anagrams = [];

  for (const word of words) {
    records = checkRecords(word, records);
  }

  records.map(record => anagrams.push(record.anagrams));

  console.log('records', records)

  return anagrams;
}

function checkRecords(word, records) {
  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    if (isAnagram(word, record)) {
      record.anagrams.push(word);
      return records;
    }
  }
  records.push(generateNewRecord(word));
  
  return records;
}

function isAnagram (word, record) {
  if (word.length !== record.length) return false;
  const copiedRecord = {...record};
  
  for (const character of word) {
    if (!copiedRecord[character] || copiedRecord[character] < 0) return false;
    copiedRecord[character] -= 1;
  }
  return true;
}

function generateNewRecord(word) {
  const newRecord = {
    anagrams: [word],
    length: word.length,
  };
  
  for (const character of word) {
    newRecord[character] = newRecord[character] ? newRecord[character] += 1 : 1;
  }
  
  return newRecord;
}

/* 
Sorting the words when making the anagram dictionary to avoind having to loop through all anagrams again

T: O( w * n * log(n)) | S: O(w*n)
*/
function groupAnagramsSort(words) {
  const anagrams = {}
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  console.log('anagrams', anagrams)
  return Object.values(anagrams);

}


module.exports = {groupAnagrams, groupAnagramsSort}