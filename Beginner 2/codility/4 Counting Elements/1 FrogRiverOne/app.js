/**
 * https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 * input(X/A): 5 / [1, 3, 1, 4, 2, 3, 5, 4]
 * output: 6
 */

//  N and X are integers within the range [1..100,000];
//  each element of array A is an integer within the range [1..X].

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N)
const solution = (X, A) => {
    const s = new Set();

    for (let index = 0; index < A.length; index++) {
        s.add(A[index]);
        if (s.size === X) return index;
    }

    return -1;
};

console.log(
    input.map((input) => {
        const [X, A] = input.split(' ');
        return solution(+X, A.split(',').map(Number));
    })
);
