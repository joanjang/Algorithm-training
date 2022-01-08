/**
 * https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/start/
 * input(X/Y/D): 10 / 85 / 30
 * output: 3
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(1)
const solution = (X, Y, D) => {
    return Y - X === 0 ? 0 : Math.ceil((Y - X) / D);
};

console.log(
    input.map((input) => {
        const [X, Y, D] = input.split(' ');
        return solution(+X, +Y, +D);
    })
);
