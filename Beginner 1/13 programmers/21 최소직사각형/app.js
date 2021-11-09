/**
 * https://programmers.co.kr/learn/courses/30/lessons/86491
 * input: [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
 * output: 133
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (sizes) => {
    return sizes
        .reduce(
            ([w, h], cur) => {
                const [min, max] = cur.sort((a, b) => a - b);
                return [w < min ? min : w, h < max ? max : h];
            },
            [0, 0, 0]
        )
        .reduce((pre, cur) => pre * cur);
};

console.log(
    input.map((arr) =>
        solution(arr.split(' ').map((i) => i.split(',').map(Number)))
    )
);
