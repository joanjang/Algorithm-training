/**
 * https://programmers.co.kr/learn/courses/30/lessons/64065
 * input: {{4,2,3},{3},{2,3,4,1},{2,3}}
 * output: [3, 2, 4, 1]
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (s) => {
    return s
        .replace(/{|}}$/g, '')
        .split(/},/)
        .map((i) => i.split(',').map(Number))
        .sort((a, b) => a.length - b.length)
        .reduce(
            (acc, cur) => [...acc, cur.find((el) => !acc.includes(el))],
            []
        );
};

console.log(input.map((str) => solution(str)));
