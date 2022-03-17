/**
 * https://programmers.co.kr/learn/courses/30/lessons/77884
 * input(left/right): 13 / 17
 * output: 43
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// Others: 제곱근 사용
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) answer -= i;
        else answer += i;
    }
    return answer;
}

// ME
const solution = (left, right) => {
    const nums = new Array(right - left + 1).fill().map((_, idx) => {
        const num = left + idx;
        const divisor = [];
        for (let i = 1; i <= Math.ceil(num / 2); i++)
            if (num % i === 0) divisor.push(i, num / i);
        return new Set(divisor).size % 2 === 0 ? num : num * -1;
    });
    return nums.reduce((pre, cur) => pre + cur);
};

console.log(
    input.map((arr) => {
        const [l, r] = arr.split(' ');
        return solution(+l, +r);
    })
);
