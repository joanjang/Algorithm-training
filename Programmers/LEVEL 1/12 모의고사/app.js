/**
 * https://programmers.co.kr/learn/courses/30/lessons/42840
 * input: [1,2,3,4,5]
 * output: [1]
 **/

const { chownSync } = require('fs');

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (answers) => {
    const students = [
            [5, 1, 2, 3, 4],
            [5, 2, 1, 2, 3, 2, 4, 2],
            [5, 3, 3, 1, 1, 2, 2, 4, 4, 5],
        ],
        score = {};
    let max = 0;

    answers.forEach((i, idx) => {
        students.forEach((s, nm) => {
            if (i === s[(idx + 1) % s.length]) {
                score[nm + 1] = ++score[nm + 1] || 1;
                max = max < score[nm + 1] ? score[nm + 1] : max;
            }
        });
    });
    return Object.entries(score)
        .filter(([_, val]) => val === max)
        .map(([key, _]) => Number(key));
};

console.log(input.map((arr) => solution(arr.split(',').map(Number))));
