/**
 * input: abcabcabcabcdededededede
 * output: 14
 */

const s = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

const solution = (s) => {
    if (s.length === 1) return 1;
    let arr = [];
    for (let i = 1; i <= s.length / 2; i++) {
        let cnt = 1;
        let str = '';
        for (let j = 0; j < s.length - 1; j += i) {
            let multi = j + i;
            const pre = s.substring(j, multi);
            const cur = s.substring(multi, multi + i);

            if (pre === cur) cnt++;
            else {
                str += `${cnt > 1 ? cnt : ''}${pre}`;
                cnt = 1;
            }

            if (multi >= s.length - 1)
                str += `${cnt > 1 ? cnt : ''}${s.substring(multi)}`;
        }
        arr.push(str.length);
    }
    return Math.min(...arr);
};

console.log(solution(s));
