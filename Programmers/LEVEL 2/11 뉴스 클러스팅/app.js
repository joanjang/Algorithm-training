/**
 * https://programmers.co.kr/learn/courses/30/lessons/17677
 * input(str1/str2): aa1+aa2/AAAA12
 * output: 43690
 **/

const p = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (str1, str2) => {
    const keyword = {};
    const checkString = (str) => str >= 'A' && str <= 'Z';
    const set = (key, value) => {
        for (i = 0; i < value.length - 1; i++) {
            const str = value.substring(i, i + 2);
            if (checkString(str[0]) && checkString(str[1]))
                keyword[key] = keyword[key] ? [...keyword[key], str] : [str];
        }
    };
    const count = (intersection = [], [...union] = keyword[1]) => {
        keyword[2].forEach((str) => {
            if (
                intersection.filter((s) => s === str).length <
                keyword[1].filter((s) => s === str).length
            )
                intersection.push(str);

            if (!union.includes(str)) union.push(str);
            else if (
                union.filter((s) => s === str).length <
                keyword[2].filter((s) => s === str).length
            )
                union.push(str);
        });

        return [intersection.length, union.length];
    };

    const acc = () => {
        if (!(keyword[1] || keyword[2])) return 1;
        const [i, u] = count();
        return i === u ? 1 : i / u;
    };
    [str1, str2].forEach((str, idx) => set(idx + 1, str.toUpperCase()));
    return Math.floor(acc() * 65536);
};

console.log(p.map((p) => solution(p.split(',')[0], p.split(',')[1])));

// const A = ['1', '1', '2'];
// const B = ['1', '3', '4'];

// console.log(new Set([...A, ...B]));
