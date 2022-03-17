/**
 * boj.kr #11720
 * input: 5
 *        54321
 * output: 15
 */

// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')[1]
    .split('');
console.log(input.reduce((pre, cur) => +pre + +cur));
