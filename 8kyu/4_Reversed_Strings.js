/* https://www.codewars.com/kata/reversed-strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */
function solution(str) {
    return str.split('').reverse().join('');
}