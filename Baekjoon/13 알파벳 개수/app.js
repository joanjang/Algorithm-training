/**
 * https://www.acmicpc.net/problem/10808
 * input: baekjoon
 * output: 1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0
 **/

// 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const solution = (S) => {
    const [first, last] = ['a', 'z'].map((alphabet) => alphabet.charCodeAt(0));
    const result = Array(last - first + 1).fill(0);

    [...S].forEach((str) => {
        result[str.charCodeAt(0) - first]++;
    });

    return result.join(' ');
};

console.log(solution(input));
