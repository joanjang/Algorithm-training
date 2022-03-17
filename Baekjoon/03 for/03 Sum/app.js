/**
 * boj.kr #8393
 * input/output: 3 / 6
 */

// input = 6
// output = 1+2+3+..+n

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
let sum = 0;
for (let i = +input; i > 0; i--) sum += i;
console.log(sum);
