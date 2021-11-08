/**
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 * input: [5,0,2,7]
 * output: [2,5,7,9,12]
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers) => {
    return [
        ...new Set(
            numbers
                .sort((a, b) => a - b)
                .flatMap((cur, idx) =>
                    numbers.slice(idx + 1).map((next) => cur + next)
                )
                .sort((a, b) => a - b)
        ),
    ];
};

console.log(input.map((arr) => solution(arr.split(',').map(Number))));
