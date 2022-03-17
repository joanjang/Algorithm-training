/**
 * https://programmers.co.kr/learn/courses/30/lessons/76501
 * input(absolutes/signs): [4,7,12], [true,false,true]
 * output: 9
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (absolutes, signs) =>
    absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);

console.log(
    input.map((arr) =>
        solution(
            arr.split(' ')[0].split(',').map(Number),
            arr
                .split(' ')[1]
                .split(',')
                .map((str) => str === 'true')
        )
    )
);
