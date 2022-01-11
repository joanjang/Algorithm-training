/**
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * input(A): [4,1,3,2]
 * output: 1
 */

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 정확성: 100%
// 시간복잡도: O(N) or O(N * log(N))
const solution = (A) => {
    const ALen = A.length,
        distinctLen = [...new Set(A)].length;

    return distinctLen === ALen && Math.max(...A) === ALen ? 1 : 0;
};

// 정확성: 83%
// 시간복잡도: O(N) or O(N * log(N))
const solution1 = (A) => {
    return Math.max(...A) === A.length ? 1 : 0;
};

console.log(input.map((A) => solution(A.split(',').map(Number))));
