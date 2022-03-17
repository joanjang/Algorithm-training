/**
 * boj.kr #1000
 * input: 2 3
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split(' ');
console.log(+input[0] + +input[1]);
