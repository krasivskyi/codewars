/* https://www.codewars.com/kata/54da5a58ea159efa38000836
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
  return A.find((item) => A.filter((el) => el === item).length % 2);
}

function findOdd2(A) {
    return A.reduce((acc, num) => acc ^ num, 0);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd2([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));