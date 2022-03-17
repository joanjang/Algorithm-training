/**
 * boj.kr #10871
 * input: 10 5
 *        1 10 4 9 2 3 8 5 7 6
 * output : 1 4 2 3
 */

// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
// input: N X
//        A

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split('\n');
const N = input[0].split(' ').map((i) => +i);
let result = '';
input[1].split(' ').forEach((i) => {
    if (i < +N[1]) result += i + ' ';
});
console.log(result);
