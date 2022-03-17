/**
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/start/
 * input(A): [2, 3, 1, 5]
 * output: 3
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// 시간복잡도: O(N) or O(N * log(N))
const solution = (A) => {
    const len = A.length;
    if (len === 0) return 1;

    const sumIncludingMissingNum = ((len + 1) * (len + 2)) / 2;
    return sumIncludingMissingNum - A.reduce((acc, cur) => acc + cur);
};

console.log(input.map((A) => solution(A.split(',').map(Number))));
