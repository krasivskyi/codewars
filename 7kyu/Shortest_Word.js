/* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
