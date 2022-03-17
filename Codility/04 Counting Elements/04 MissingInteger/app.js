/**
 * https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 * input:  [1, 3, 6, 4, 1, 2]
 * output: [3, 2, 2, 4, 2]
 */

const { mainModule } = require('process');

//  N and M are integers within the range [1..100,000];
//  each element of array A is an integer within the range [1..N + 1].

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N) or O(N * log(N))
const solution = (A) => {
    let min = 1;
    A.sort((a, b) => a - b).forEach((_, index) => {
        if (A[index] === min) min++;
    });
    return min;
};

// 시간복잡도: O(N**2)
const solution1 = (A) => {
    const missingNums = [];

    A = [...new Set(A)];
    new Array(A.length).fill().map((_, index) => {
        if (!A.includes(index + 1)) missingNums.push(index + 1);
    });

    return missingNums.length > 0
        ? Math.min(...missingNums)
        : Math.max(...A) + 1;
};

console.log(
    input.map((A) => {
        return solution(A.split(',').map(Number));
    })
);
