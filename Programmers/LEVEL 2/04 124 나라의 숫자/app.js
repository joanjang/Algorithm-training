/**
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 * input: 100
 * output: 41
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

// Others
const solution = (n) =>
    n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];

// ME
const solution1 = (n) => {
    if (n < 1) return '';
    let answer = [];
    do {
        answer = [`${n % 3 || 4}`, ...answer];
        const trunc = Math.trunc(n / 3);
        n = n / 3 - trunc ? trunc : trunc - 1;
    } while (n);

    return answer.join('');
};

console.log(input.map((i) => solution(i)));
