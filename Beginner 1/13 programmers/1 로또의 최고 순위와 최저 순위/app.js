/**
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 * input(lottos/win_nums): [44, 1, 0, 0, 31, 25]/[31, 10, 45, 1, 6, 19]
 * output: [3, 5]
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (lottos, win_nums) => {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let score = [0, lottos.filter((i) => i === 0).length];

    win_nums.forEach((i) => {
        if (lottos.includes(i)) score[0]++, score[1]++;
    });

    return score.map((s) => rank[s]).sort((pre, cur) => pre - cur);
};

console.log(
    input.map((str) => {
        const [l, w] = str.split(' ');
        return solution(l.split(',').map(Number), w.split(',').map(Number));
    })
);
