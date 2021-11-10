/**
 * https://programmers.co.kr/learn/courses/30/lessons/82612
 * input: 3	20	4
 * output: 10
 **/

const [p, m, c] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ');

const solution = (price, money, count) => {
    for (let i = 1; i <= count; i++) money -= price * i;
    return money < 0 ? Math.abs(money) : 0;
};

console.log(solution(+p, +m, +c));
