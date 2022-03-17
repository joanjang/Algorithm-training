/**
 * https://programmers.co.kr/learn/courses/30/lessons/1845ㄴ
 * input: [3,3,3,2,2,2]
 * output: 2
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (nums) => {
    const len = nums.length / 2;
    const numOfTypes = [...new Set(nums)].length;
    return len > numOfTypes ? numOfTypes : len;
};

console.log(input.map((arr) => solution(arr.split(',').map(Number))));
