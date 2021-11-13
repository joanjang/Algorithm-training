/**
 * https://programmers.co.kr/learn/courses/30/lessons/62048
 * input(W, H): 8, 12
 * output: 80
 */

const [w, h] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const solution = (w, h) => {
    const [min, max] = w < h ? [w, h] : [h, w];
    const divisor = (num) => [
        ...new Set(
            Array(parseInt(Math.pow(num, 0.5)))
                .fill()
                .map((_, idx) => idx + 1)
                .filter((i) => num % i === 0)
                .flatMap((i) => [i, num / i])
                .sort((a, b) => b - a)
        ),
    ];

    return (
        min * max -
        (min + max - divisor(min).find((el) => divisor(max).includes(el)))
    );
};

console.log(solution(w, h));
