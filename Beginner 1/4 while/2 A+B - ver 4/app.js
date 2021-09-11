/**
 * boj.kr #10951
 * input: 1 1
 *        2 3
 *        3 4
 *        9 8
 *        5 2
 * output: 2
 *         5
 *         7
 *         17
 *         7
 */

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split('\n');
let i = 0;
let result = '';
while (i < input.length - 1) {
    const arr = input[i++].split(' ').map(x => +x);
    result += `${arr[0] + arr[1]}\n`;
}
console.log(result);
s