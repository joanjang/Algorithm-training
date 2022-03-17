/**
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 * input(array/commands): [1, 5, 2, 6, 3, 7, 4]	/ [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 * output: [5, 6, 3]
 **/

const [a, c] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (array, commands) => {
    return commands.map(
        ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
    );
};

console.log(
    solution(
        a.split(',').map(Number),
        c.split(' ').map((i) => i.split(',').map(Number))
    )
);
