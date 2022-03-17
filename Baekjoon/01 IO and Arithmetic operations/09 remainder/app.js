/**
 * boj.kr #10430
 * input: A B C
 * output: (A+B)%C
 *         ((A%C) + (B%C))%C
 *         (A×B)%C
 *         ((A%C) × (B%C))%C
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split(' ');
const solution = (a, b, c) => {
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
};

solution(+input[0], +input[1], +input[2]);
