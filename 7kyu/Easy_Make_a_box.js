/*
https://www.codewars.com/kata/make-a-square-box

Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]*/

// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
function box(n) {
  const lineArr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      lineArr.push("-".repeat(n));
    } else {
      lineArr.push("-" + " ".repeat(n - 2) + "-");
    }
  }

  return lineArr;
}

console.log(box(5));

function box2(n) {
  const outB = "-".repeat(n);
  const inB = `-${" ".repeat(n - 2)}-`;

  return [outB, ...Array(n - 2).fill(inB), outB];
}
