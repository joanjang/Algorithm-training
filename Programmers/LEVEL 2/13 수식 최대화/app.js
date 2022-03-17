/**
 * https://programmers.co.kr/learn/courses/30/lessons/67257
 * input: "100-200*300-500+20"
 * output: 60420
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (expression) => {
    const combi = [],
        ops = ['+', '-', '*'].filter((op) => expression.includes(op)),
        exp = expression.match(/\d+|[^\d]/g),
        operation = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
        };

    const combination = (arr, result = []) => {
        if (result.length === ops.length) return combi.push(result);
        for (let i = 0; i < arr.length; i++) {
            const tmp = [...arr];
            combination(tmp, [...result, ...tmp.splice(i, 1)]);
        }
    };
    combination(ops);
    return Math.max(
        ...combi.flatMap((arr) => {
            const acc = [...exp];
            arr.forEach((op) => {
                while (1) {
                    const idx = acc.findIndex((ex) => ex === op);
                    if (idx === -1) return;
                    acc.splice(
                        idx - 1,
                        3,
                        operation[op](+acc[idx - 1], +acc[idx + 1])
                    );
                }
            });
            return Math.abs(acc);
        })
    );
};

console.log(input.map((arr) => solution(arr)));
