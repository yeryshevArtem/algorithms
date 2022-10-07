// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;



// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   let res = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     res = res + str[i];
//   }
//   return res;
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   const res = [];
//   for (let i = str.length; i >= 0; i--) {
//     res.push(str[i]);
//   }
//   return res.join('');
// }
