/* https://www.codewars.com/kata/scrolling-text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck! */

// in uppercase. !!!!!!!!
function scrollingText(text) {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    arr.push(text.slice(i) + text.slice(0, i));
    arr[i] = arr[i].toUpperCase();
  }
  return arr;
}


function scrollingText(text) {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    let rotation = text.slice(i) + text.slice(0, i);
    arr.push(rotation.toUpperCase());
  }
  return arr;
}