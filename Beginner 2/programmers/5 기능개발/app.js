/**
 * https://programmers.co.kr/learn/courses/30/lessons/42586
 * input(progresses/speeds): [93, 30, 55], [1, 30, 5]
 * output: [2, 1]
 */

const [p, s] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (progresses, speeds) => {
    const days = progresses.map((v, idx) => Math.ceil((100 - v) / speeds[idx]));
    let answer = [0],
        max = days[0];
    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= max) answer[j] += 1;
        else {
            answer[++j] = 1;
            max = days[i];
        }
    }
    return answer;
};

console.log(solution(p.split(' '), s.split(' ')));
