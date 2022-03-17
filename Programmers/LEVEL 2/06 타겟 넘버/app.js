/**
 * https://programmers.co.kr/learn/courses/30/lessons/43165
 * input(numbers/target): [1, 1, 1, 1, 1], 3
 * output: 5
 */

const [n, t] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers, target) => {
    let answer = 0;
    const dfs = (sum, idx) => {
        if (idx === numbers.length) {
            if (target === sum) answer++;
            return;
        }

        dfs(sum + numbers[idx], idx + 1);
        dfs(sum - numbers[idx], idx + 1);
    };
    dfs(0, 0);
    return answer;
};

console.log(solution(n.split(' ').map(Number), +t));
