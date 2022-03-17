/**
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 * input(A/K): [3, 8, 9, 7, 6] / 3
 * output: [9, 7, 6, 3, 8]
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (A, K) => {
    if ((K %= A.length) === 0) return A;
    if (A.length === K) return A;
    if (A.every((N) => N === A[0])) return A;

    const lastElements = A.splice(K * -1, K);
    A.unshift(...lastElements);
    return A;
};

console.log(
    input.map((input) => {
        const [A, K] = input.split(' ');
        return solution(A.split(',').map(Number), +K);
    })
);
