/**
 * https://programmers.co.kr/learn/courses/30/lessons/12985
 * input(n/a/b): 8 / 4 / 7
 * output: 3
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = ([n, ...rest]) => {
    let cnt = 0,
        [min, max] = [Math.min(...rest), Math.max(...rest)];
    while (min !== max) {
        [min, max] = [min, max].map((num) => Math.ceil(num / 2));
        cnt++;
    }
    return cnt;
};

console.log(input.map((arr) => solution(arr.split(' '))));
