/**
 * https://programmers.co.kr/learn/courses/30/lessons/70128
 * input(a/b): [1,2,3,4], [-3,-1,0,2]
 * output: 3
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (a, b) => {
    return a.reduce((arr, cur, idx) => arr + cur * b[idx], 0);
};

console.log(
    input.map((arr) =>
        solution(
            arr.split(' ')[0].split(',').map(Number),
            arr.split(' ')[1].split(',').map(Number)
        )
    )
);
