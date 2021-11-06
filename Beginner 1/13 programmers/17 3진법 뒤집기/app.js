/**
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 * input: 125
 * output: 229
 **/

const { timeEnd } = require('console');

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// Others: toString, parseInt 사용
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
};

// ME
const solution1 = (n) => {
    const three = (num) =>
        num < 1 ? '' : three(Math.floor(num / 3)) + (num % 3);
    const ten = (num) =>
        num.reduce(
            (acc, cur, idx) =>
                (acc += +cur * Math.pow(3, num.length - idx - 1)),
            0
        );
    return ten([...three(n)].reverse());
};

console.log(
    input.map((n) => {
        return solution(+n);
    })
);
