// EXAMPLE 1 - Remove/Replace all Whitespace from a String in JavaScript

const str = ' A   B   C    D ';

// ✅ Remove all whitespace from a string (including spaces, tabs and newline characters)
const noWhitespace = str.replace(/\s/g, '');
console.log(noWhitespace); // 👉️ 'ABCD'

// ✅ Remove only the spaces from a string
const noSpaces = str.replace(/ /g, '');
console.log(noSpaces); // 👉️ 'ABCD'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Only removing/replacing the spaces from the String

// const str = ' A   B   C    D ';

// const noSpaces = str.replace(/ /g, '');
// console.log(noSpaces); // 👉️ 'ABCD'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove/Replace all Whitespace from a String using replaceAll()

// const str = ' A   B   C    D ';

// const noWhitespace = str.replaceAll(/\s/g, '');
// console.log(noWhitespace); // 👉️ 'ABCD'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Only replacing/removing the spaces from the String with replaceAll()

// const str = ' A   B   C    D ';

// const noWhitespace = str.replaceAll(' ', '');
// console.log(noWhitespace); // 👉️ 'ABCD'

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove/Replace all spaces in a String using `String.split()`

// const str = 'bobby hadz com';

// const withoutSpaces = str.split(' ').join('');
// console.log(withoutSpaces); // 👉️ 'bobbyhadzcom'
