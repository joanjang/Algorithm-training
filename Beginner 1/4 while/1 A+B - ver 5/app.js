/**
 * boj.kr #10952
 * input: 1 1
 *        2 3
 *        3 4
 *        9 8
 *        5 2
 *        0 0
 * output: 2
 *         5
 *         7
 *         17
 *         7
 */

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split('\n');
let i = 0;
while (input[i] !== '0 0') {
    const arr = input[i++].split(' ').map(val => +val);
    console.log(arr[0] + arr[1]);
}