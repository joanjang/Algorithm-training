/**
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 * input(participant/completion): ["leo", "kiki", "eden"] / ["eden", "kiki"]
 * output: leo
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (participant, completion) => {
    const obj = participant.reduce((acc, nm) => {
        acc[nm] = ++acc[nm] || 1;
        return acc;
    }, {});

    completion.forEach((i) => --obj[i]);
    return Object.keys(obj).find((nm) => obj[nm] === 1);
};

console.log(
    input.map((arr) =>
        solution(arr.split(/\s/)[0].split(','), arr.split(/\s/)[1].split(','))
    )
);
