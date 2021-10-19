/**
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 * input: baabaa
 * output: 1
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const solution = (s) => {
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
