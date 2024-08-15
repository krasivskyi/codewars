/* https://www.codewars.com/kata/magic-index

A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A. */
function findMagicIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}

function findMagicIndex(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === mid) {
            return mid;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}