/**
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 * input(priorities, location): [1,1,9,1,1,1] / 0
 * output: 5
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (priorities, location) => {
    let cnt = 0;
    const arr = priorities.map((priority, idx) => {
        return { priority, isLocation: idx === location };
    });
    while (1) {
        const rank = arr.shift();
        if (!arr.some((i) => i.priority > rank.priority)) {
            cnt++;
            if (rank.isLocation) return cnt;
        } else arr.push(rank);
    }
};

console.log(
    input.map((arr) => {
        const [p, l] = arr.split(' ');
        return solution(p.split(',').map(Number), +l);
    })
);
