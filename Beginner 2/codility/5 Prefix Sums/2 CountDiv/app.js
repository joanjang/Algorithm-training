/**
 * https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 * input(A/B/K): 6 / 11 / 2
 * output: 3
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(1)
const solution = (A, B, K) => {
    const count = Math.floor(B / K) - Math.floor(A / K);
    return A % K === 0 ? count + 1 : count;
};

// 시간복잡도: O(B-A) // Timeout
// 정확도: 50%
const solution1 = (A, B, K) => {
    const result = new Array(B - A + 1).fill().map((_, idx) => idx + A);
    return result.filter((num) => num % K === 0).length;
};

console.log(
    input.map((input) => {
        const [A, B, K] = input.split(',');
        return solution(+A, +B, +K);
    })
);
