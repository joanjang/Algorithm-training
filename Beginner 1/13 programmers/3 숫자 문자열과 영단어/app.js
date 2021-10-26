/**
 * https://programmers.co.kr/learn/courses/30/lessons/81301
 * input: one4seveneight
 * output: 1478
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (s) => {
    let answer1 = s,
        answer2 = '';
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    // Others: split 사용
    for (let i = 0; i < numbers.length; i++) {
        let arr = answer1.split(numbers[i]);
        answer1 = arr.join(i);
    }

    // Me: ..
    for (let i = 0, str = ''; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            if (numbers.indexOf((str += s[i])) === -1) continue;
            answer2 += numbers.indexOf(str);
            str = '';
        } else answer2 += s[i];
    }

    return [Number(answer1), Number(answer2)];
};

console.log(input.map((str) => solution(str)));
