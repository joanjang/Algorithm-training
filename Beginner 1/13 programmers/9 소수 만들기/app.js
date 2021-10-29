/**
 * https://programmers.co.kr/learn/courses/30/lessons/12977
 * input: [1,2,3,4]
 * output: 1
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (nums) => {
    let answer = 0;
    const isPrime = (n) => {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++)
                if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
        }
    }
    return answer;
};

console.log(input.map((arr) => solution(arr.split(',').map(Number))));
