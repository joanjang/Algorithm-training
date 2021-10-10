/**
 * boj.kr #1157
 * input/output(1): zZa/Z
 * input/output(2): Mississipi/?
 */

// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
// 단, 대문자와 소문자를 구분하지 않는다.
let map = new Map();
let [w, cnt] = ['', 0];
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .toUpperCase()
    .split('')
    .map((i) => {
        map.set(i, !map.has(i) ? 1 : map.get(i) + 1);
        if (cnt == map.get(i)) [w, cnt] = ['?', map.get(i)];
        else if (cnt < map.get(i)) [w, cnt] = [i, map.get(i)];
    });
console.log(w);
