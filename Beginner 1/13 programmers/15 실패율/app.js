/**
 * https://programmers.co.kr/learn/courses/30/lessons/42889
 * input(N/stages): 4 / [4,4,4,4,4]
 * output: [4,1,2,3]
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (N, stages) => {
    return new Array(N)
        .fill()
        .map((_, idx) => {
            const total = stages.filter((i) => i >= idx + 1).length;
            return [
                idx + 1,
                total > 0
                    ? stages.filter((i) => i === idx + 1).length / total
                    : 0,
            ];
        })
        .sort((a, b) => b[1] - a[1])
        .map((i) => i[0]);
};

console.log(
    input.map((arr) => {
        const [N, s] = arr.split(' ');
        return solution(+N, s.split(',').map(Number));
    })
);
