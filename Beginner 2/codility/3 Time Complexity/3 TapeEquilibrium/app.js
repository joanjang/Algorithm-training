/**
 * https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 * input(A): [3, 1, 2, 4, 3]
 * output: 1
 */

// A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1]
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N)
const solution = (A) => {
    const accArr = [];
    const total = A.reduce((prev, cur) => prev + cur);
    let min = Number.MAX_SAFE_INTEGER;

    A.reduce((acc, cur) => {
        accArr.push(acc);
        return acc + cur;
    });
    accArr.forEach((val) => {
        min = Math.min(min, Math.abs(val - (total - val)));
    });

    return min;
};

// 시간복잡도: O(N * N)
const solution1 = (A) => {
    if (A.length <= 2) return Math.abs(A[0] - A[1]);
    const reducer = (arr) => arr.reduce((prev, cur) => prev + cur);
    const total = reducer(A);

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < A.length - 1; i++) {
        if (min === 0) return min;
        const fewerPart = (index) =>
            Math.ceil(A.length / 2) - 1 > index
                ? A.slice(0, index + 1)
                : A.slice(index + 1);
        const totalOfFewerPart = reducer(fewerPart(i));
        const difference = Math.abs(
            totalOfFewerPart - (total - totalOfFewerPart)
        );
        min = Math.min(...[min, difference]);
    }

    return min;
};

console.log(input.map((A) => solution(A.split(',').map(Number))));
