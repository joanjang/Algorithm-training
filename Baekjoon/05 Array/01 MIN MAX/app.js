/**
 * boj.kr #10818
 * input: 5
 *        20 10 35 30 7
 * output: 7 35
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split('\n');
const arr = input[1]
    .split(' ')
    .map((i) => +i)
    .sort((a, b) => a - b);
console.log(arr[0], arr[+input[0] - 1]);
