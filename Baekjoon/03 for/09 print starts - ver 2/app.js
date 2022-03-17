/**
 * boj.kr #2439
 * input: 5
 * output:     *
 *            **
 *           ***
 *          ****
 *         *****
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();
const arr = Array.from(
    {
        length: +input,
    },
    (v, i) => i + 1
);
arr.forEach((i) => console.log(' '.repeat(+input - i) + '*'.repeat(i)));
