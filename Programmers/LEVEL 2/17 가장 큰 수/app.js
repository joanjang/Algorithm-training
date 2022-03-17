/**
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 * input: [3,30,34,5,9]
 * output: "9534330"
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers) =>
    numbers.every((num) => num === 0)
        ? '0'
        : numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

console.log(input.map((arr) => solution(arr.split(',').map(Number))));
