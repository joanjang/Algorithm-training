/**
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 * input(n/lost/reserve): 5 / [2, 4] / [3]
 * output: 4
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (n, lost, reserve) => {
    let answer = 0;
    const count = new Array(n).fill(1).map((i, idx) => {
        if (lost.includes(idx + 1)) i--;
        if (reserve.includes(idx + 1)) i++;
        return i;
    });

    count.forEach((cnt, student) => {
        if (cnt > 0) return;
        const index = count.findIndex((i, idx) =>
            idx >= student - 1 && idx <= student + 1 ? i === 2 : false
        );
        if (index > -1) count[index]--, count[student]++;
        else answer++;
    });
    return n - answer;
};

console.log(
    input.map((arr) => {
        const [n, l, r] = arr.split(' ');
        return solution(
            Number(n),
            l.split(',').map(Number),
            r.split(',').map(Number)
        );
    })
);
