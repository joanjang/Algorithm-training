/**
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 * input: baabaa
 * output: 1
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

// Others: 효율성 통과 소스: STACK 이용
const solution = (s) => {
    const stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }

    return stack.length > 0 ? 0 : 1;
};

// ME: 재귀함수 이용
const solution1 = (s) => {
    const arr = ([...str]) => {
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] === str[i + 1]) {
                str.splice(i, 2);
                return str ? arr(str) : str;
            }
        }
        return str;
    };
    return arr(s).length > 0 ? 0 : 1;
};

console.log(solution(input));
