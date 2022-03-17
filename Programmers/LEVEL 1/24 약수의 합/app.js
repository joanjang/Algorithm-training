/**
 * https://programmers.co.kr/learn/courses/30/lessons/12928
 * input: 12
 * output: 28
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (n) => {
    if (n === 0) return 0;
    return [
        ...new Set(
            Array(parseInt(Math.sqrt(n)))
                .fill()
                .map((_, idx) => idx + 1)
                .filter((i) => n % i === 0)
                .flatMap((i) => [i, n / i])
                .sort((a, b) => a - b)
        ),
    ].reduce((prev, cur) => prev + cur);
};

console.log(input.map((num) => solution(+num)));
