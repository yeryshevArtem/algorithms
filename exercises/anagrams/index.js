// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getSorted(str) {
  const pattern = /[^\w]/g;
  const pureStr = str.replace(pattern, "").toLowerCase();
  return pureStr.split("").sort().join();
}

function anagrams(stringA, stringB) {
  return getSorted(stringA) === getSorted(stringB);
}

module.exports = anagrams;

//
// function getCharMap(string) {
//   const charMap = {};
//   const pattern = /[^\w]/g;
//   const pureString = string.replace(pattern, "").toLowerCase();
//   for (let char of pureString) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }
//   return charMap;
// }
//
// function anagrams(stringA, stringB) {
//   let result = true;
//   const charMapA = getCharMap(stringA);
//   const charMapB = getCharMap(stringB);
//
//   if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
//     for (let key in charMapA) {
//       if (charMapB[key] !== charMapA[key]) {
//         result = false;
//       }
//     }
//   } else {
//     result = false;
//   }
//   return result;
// }
