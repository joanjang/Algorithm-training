/**
 * boj.kr #4344
 * input: 5
 *        5 50 50 70 80 100
 *        7 100 95 90 80 70 60 50
 *        3 70 90 80
 *        3 70 90 81
 *        9 100 99 98 97 96 95 94 93 91
 * output: 40.000%
 *         57.143%
 *         33.333%
 *         66.667%
 *         55.556%
 */

// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();
input.forEach((C) => {
    const arr = C.trim()
        .split(' ')
        .map((i) => +i);
    const N = arr.shift();
    const avg = arr.reduce((pre, cur) => pre + cur) / N;
    console.log(
        `${((arr.filter((s) => s > avg).length / N) * 100).toFixed(3)}%`
    );
});
