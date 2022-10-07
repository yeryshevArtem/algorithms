// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charts = {};
  let maxCharVal = null;
  let maxCharKey = null;
  for (let char of str) {
    charts[char] = charts[char] + 1 || 1;
  }
  maxCharVal = charts[str[0]];
  maxCharKey = str[0];
  for (let key in charts) {
    if (charts[key] > maxCharVal) {
      maxCharKey = key;
      maxCharVal = charts[key];
    }
  }
  return maxCharKey;
}

module.exports = maxChar;
