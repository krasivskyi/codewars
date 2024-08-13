/* https://www.codewars.com/kata/insert-dashes

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0). */
function insertDash(num) {
  let str = num.toString();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (
      i < str.length - 1 &&
      parseInt(str[i]) % 2 !== 0 &&
      parseInt(str[i + 1]) % 2 !== 0
    ) {
      result += "-";
    }
  }
  return result;
}