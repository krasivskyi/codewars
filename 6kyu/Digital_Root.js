/* https://www.codewars.com/kata/541c8630095125aba6000c00
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
*/

function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}
console.log(digitalRoot(493193));
