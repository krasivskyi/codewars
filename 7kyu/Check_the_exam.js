/* https://www.codewars.com/kata/5a3dd29055519e23ec000074

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented by an empty string (in C the space character is used).

If the score is less than 0, return 0. */

function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === '') {
            score += 0;
        } else if (array2[i] === array1[i]) {
            score += 4;
        } else {
            score -= 1;
        }
    }
    return score < 0 ? 0 : score;
}   