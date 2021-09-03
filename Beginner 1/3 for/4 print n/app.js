/**
 * boj.kr #2741
 * input: 5
 * output : 1
 *          2
 *          3
 *          4
 *          5
 */

const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let result = '';
for (let i = 1; i <= +input; i++)
    result += i + '\n';
console.log(result);