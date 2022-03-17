/**
 * boj.kr #1065
 * input: 110
 * output: 99
 */

// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
const result = (input) => {
    let hansu = 99;
    for (let i = 100; i <= input; i++) {
        const arr = `${i}`.split('').map(Number);
        if (arr[0] - arr[1] === arr[1] - arr[2]) hansu++;
    }
    return hansu;
};

console.log(+input < 100 ? +input : result(input));
