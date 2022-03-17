/**
 * https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * input(N/A): 5 / [3, 4, 4, 6, 1, 4, 4]
 * output: [3, 2, 2, 4, 2]
 */

//  N and M are integers within the range [1..100,000];
//  each element of array A is an integer within the range [1..N + 1].

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N + M)
const solution = (N, A) => {
    const result = new Array(N).fill(0);
    let max = 0,
        lastMax = 0;

    for (let i = 0; i < A.length; i++) {
        const index = A[i] - 1;
        if (index < N) {
            if (result[index] < lastMax) result[index] = lastMax;
            if (max < ++result[index]) max = result[index];
        } else lastMax = max;
    }

    return result.map((val) => (val < lastMax ? lastMax : val));
};

console.log(
    input.map((input) => {
        const [N, A] = input.split(' ');
        return solution(+N, A.split(',').map(Number));
    })
);
