/**
 * https://programmers.co.kr/learn/courses/30/lessons/12982
 * input(d/budget): [2,2,3,3] / 10
 * output: 4
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (d, budget) => {
    let answer = 0;
    for (const price of d.sort((a, b) => a - b)) {
        if (price > budget) break;
        budget -= price;
        answer += 1;
    }
    return answer;
};

console.log(
    input.map((arr) => {
        const [d, b] = arr.split(' ');
        return solution(d.split(',').map(Number), +b);
    })
);
