/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

function clean(str) {
  let cleaned = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " " && str[i] !== "!" && str[i] !== "," && str[i] !== "." && str[i] !== "?") {
      cleaned += str[i];
    }
  }
  return cleaned;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let cleaned = clean(str);
  let rev = reverse(cleaned);
  return cleaned === rev; 
}


module.exports = isPalindrome;
