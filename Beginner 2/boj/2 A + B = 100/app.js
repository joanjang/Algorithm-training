/**
 * https://blog.encrypted.gg/927 - 0x03 연습문제
 * input(arr/n): [1, 52, 38] / 3
 * output: 1
 **/

// 서로 다른 위치 원소의 합이 100인 배열의 존재 유무
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (arr, _) => {
    const result = Array(101).fill(0);
    for (const number of arr) {
        if (result[number] > 0) return 1;
        result[100 - number]++;
    }
    return 0;
};

console.log(
    input.map((input) => {
        const [arr, N] = input.split(' ');
        return solution(arr.split(',').map(Number), +N);
    })
);
