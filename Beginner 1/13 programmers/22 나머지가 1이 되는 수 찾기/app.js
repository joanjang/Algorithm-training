/**
 * https://programmers.co.kr/learn/courses/30/lessons/87389
 * input: 10
 * output: 3
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (n, answer = 1) => {
    while (answer++ < n) {
        if ((n - 1) % answer === 0) return answer;
    }
};

console.log(input.map((n) => solution(Number(n))));
