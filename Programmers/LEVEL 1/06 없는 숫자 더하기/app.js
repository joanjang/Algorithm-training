/**
 * https://programmers.co.kr/learn/courses/30/lessons/86051
 * input: [1,2,3,4,6,7,8,0]
 * output: 14
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers) => 45 - numbers.reduce((pre, cur) => pre + cur);
console.log(input.map((arr) => solution(arr.split(',').map(Number))));
