/* https://www.codewars.com/kata/5c44b0b200ce187106452139

Write a function that returns the number of arguments it received.

args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2 */

function args_count(...args) {
    return args.length
}