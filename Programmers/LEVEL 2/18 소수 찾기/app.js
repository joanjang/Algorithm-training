/**
 * https://programmers.co.kr/learn/courses/30/lessons/42839
 * input: "011"
 * output: 2
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers) => {
    const answer = [];

    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) return false;
        return num > 1;
    };

    const combination = (arr, result = '') => {
        if (result.length > 0 && !answer.includes(+result))
            answer.push(+result);
        if (arr.length === 0) return;

        arr.forEach((_, idx) => {
            const tmp = [...arr];
            combination(tmp, result + tmp.splice(idx, 1));
        });
    };

    combination([...numbers]);
    return answer.filter((num) => isPrime(num)).length;
};

console.log(input.map((num) => solution(num)));
