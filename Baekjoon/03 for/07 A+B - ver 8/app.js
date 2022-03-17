/**
 * boj.kr #11022
 * input: 5
 *        1 1
 *        2 3
 *        3 4
 *        9 8
 *        5 2
 * output: Case #1: 1 + 1 = 2
 *         Case #2: 2 + 3 = 5
 *         Case #3: 3 + 4 = 7
 *         Case #4: 9 + 8 = 17
 *         Case #5: 5 + 2 = 7
 */

// 각 테스트 케이스마다 "Case #x: A + B = C"를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작하며, C는 A+B이다.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split('\n');
let n = 1;
input.forEach((i) => {
    const arr = i.split(' ').map((val) => +val);
    if (arr[1])
        console.log(`Case #${n++}: ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}`);
});
