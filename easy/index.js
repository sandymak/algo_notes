const { caesarCipherEncryptor } = require('./caesarCipher');
const { runLengthEncoding } = require('./runLengthEncoding');

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

const actualEncoded = runLengthEncoding('AAAAAAAAAAAAAAAAAAAAAAABBCCCCDD');
const expectedEncoded = '9A9A5A2B4C2D';

console.log('RUN-LENGTH ENCODING =', actualEncoded, "|| is correct?", actualEncoded === expectedEncoded )