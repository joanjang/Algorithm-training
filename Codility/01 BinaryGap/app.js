/**
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 * input: 529
 * output: 4
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ');

const solution = (N) => {
    const jinsu = (+N).toString(2),
        result = [];
    for (let i = 0; i < jinsu.length; i++) {
        if (jinsu[i] == 1) continue;
        const nextOneIndex = jinsu.indexOf(1, i);
        if (nextOneIndex === -1) break;
        result.push(nextOneIndex - i);
        i = nextOneIndex - 1;
    }

    return result.length > 0 ? Math.max(...result) : 0;
};

console.log(input.map((A) => solution(A)));
