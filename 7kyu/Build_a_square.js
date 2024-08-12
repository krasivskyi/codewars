/* https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++ */
function generateShape(integer) {
  let str = "";
  for (let i = 0; i < integer; i++) {
    str += "+".repeat(integer) + "\n";
  }
  return str.trimEnd();
}


function generateSquare2(n) {
  const row = "+".repeat(n);
  return new Array(n).fill(row).join("\n");
}


function generateSquare3(n) {
  return new Array(n).fill("+".repeat(n)).join("\n");
}