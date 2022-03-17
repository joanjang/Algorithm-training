/**
 * https://programmers.co.kr/learn/courses/30/lessons/67256
 * input(numbers/hand): [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"
 * output: "LRLLLRLLRRL"
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (numbers, hand) => {
    const LR = {
        L: 10,
        R: 12,
    };
    const route = [
        (n) => {
            LR['R'] = n;
            return 'R';
        },
        (n) => {
            LR['L'] = n;
            return 'L';
        },
        (n) => {
            const first = hand[0].toUpperCase(),
                last = first === 'R' ? 'L' : 'R';
            const pos = (num) =>
                num > 0
                    ? [Math.floor((num - 1) / 3), [2, 0, 1][num % 3]]
                    : [3, 1];
            const dif = (key) =>
                Math.abs(pos(LR[key])[0] - pos(n)[0]) +
                Math.abs(pos(LR[key])[1] - pos(n)[1]);
            if (dif(first) <= dif(last)) {
                LR[first] = n > 0 ? n : 10;
                return first;
            } else {
                LR[last] = n > 0 ? n : 10;
                return last;
            }
        },
    ];

    return numbers
        .map((num) => {
            return num > 0 ? route[num % 3](num) : route[2](num);
        })
        .join('');
};

console.log(
    input.map((i) =>
        solution(i.split(',')[0].split(' ').map(Number), i.split(',')[1])
    )
);
