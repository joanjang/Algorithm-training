/**
 * boj.kr #2562
 * input: 3
 *        29
 *        38
 *        12
 *        57
 *        74
 *        40
 *        85
 *        61
 * output: 85
 *         8
 */

const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split('\n').map(i => +i);
const max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);