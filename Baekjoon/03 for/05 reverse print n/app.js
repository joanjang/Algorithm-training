/**
 * boj.kr #2742
 * input: 5
 * output : 5
 *          4
 *          3
 *          2
 *          1
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
let result = '';
for (let i = +input; i > 0; i--) result += i + '\n';
console.log(result);
