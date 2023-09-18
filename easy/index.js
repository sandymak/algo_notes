const { caesarCipherEncryptor } = require('./caesarCipher');
const { runLengthEncoding } = require('./runLengthEncoding');
const { commonCharacters } = require('./commonCharacters');
const { generateDocument } = require('./generateDocument');
const { firstNonRepeatingCharacter } = require('./firstNonRepeatingCharacter');

/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= CAESAR CIPHER

// const actualEncrypted = caesarCipherEncryptor('xyz', 2);
// const expectedEncrypted = 'zab';

// console.log('CAESAR CIPHER =', actualEncrypted, "|| is correct?", actualEncrypted === expectedEncrypted )


/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= RUN-LENGTH ENCODING

// const actualEncoded = runLengthEncoding('AAAAAAAAAAAAAAAAAAAAAAABBCCCCDD');
// const expectedEncoded = '9A9A5A2B4C2D';

// console.log('RUN-LENGTH ENCODING =', actualEncoded, "|| is correct?", actualEncoded === expectedEncoded )

/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= Common Characters

// const actualCharacters = ['b', 'c'];
// const expectedCharacters = commonCharacters(['abc', 'bcd', 'cbad']);

// console.log('Common Characters =', actualCharacters, "|| is correct?", actualCharacters.join() === expectedCharacters.join() )


/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= Generate Documents

// const characters = 'Bste!hetsi ogEAxpelrt x ';
// const document = 'AlgoExpert is the Best!'

// console.log('Can Generate Document =', generateDocument(characters, document), "|| is correct?", generateDocument(characters, document) === true )


/* 
 * 
 * EASY - STRINGS
 *
*/
// ================= First Non-repeating Character
const sampleString = 'abcdadfghg';
const index = firstNonRepeatingCharacter(sampleString);

console.log('First non-repeating character index = ', index, 'isTrue?', index === 1)