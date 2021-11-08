/**
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 * input: 5	24
 * output: "TUE"
 **/

const [a, b] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ');

const solution = (a, b) => {
    const day = [30, 31],
        week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

    const convertDays = () => {
        let days = 0;
        for (let i = 1; i < a; i++)
            days += i < 8 ? (i !== 2 ? day[i % 2] : 29) : day[(i + 1) % 2];
        return days + b;
    };

    return week[convertDays() % 7];
};

console.log(solution(+a, +b));
