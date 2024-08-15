/* https://www.codewars.com/kata/57cc975ed542d3148f00015b

You will be given an array and a limit value. You must check if all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
    return a.every(num => num <= limit);
}