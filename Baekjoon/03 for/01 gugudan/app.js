/**
 * boj.kr #2739
 * input: 2
 * output: 2 * 1 = 2
 *         2 * 2 = 4
 *         2 * 3 = 6
 *         2 * 4 = 8
 *         2 * 5 = 10
 *         2 * 6 = 12
 *         2 * 7 = 14
 *         2 * 8 = 16
 *         2 * 9 = 18
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) =>
    console.log(`${+input} * ${i} = ${+input * i}`)
);
