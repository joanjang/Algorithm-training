/**
 * https://programmers.co.kr/learn/courses/30/lessons/17681
 * input(n/arr1/arr2): 5 / [9, 20, 28, 18, 11] / [30, 1, 21, 17, 28]
 * output: ["#####","# # #", "### #", "# ##", "#####"]
 **/

// 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽('#')이다. 지도 1과 지도 2에서 모두 공백('')인 부분은 전체 지도에서도 공백이다.

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// OTHERS: single vertical bar 사용
const solution = (n, arr1, arr2) => {
    return arr1.map((arr1, idx) =>
        (arr1 | arr2[idx])
            .toString(2)
            .padStart(n, '0')
            .replace(/1|0/g, (num) => (+num ? '#' : ' '))
    );
};

// ME
const solution1 = (n, arr1, arr2) => {
    const numSystemConversion = (arr) =>
        arr.map((row) => [...row.toString(2).padStart(n, '0')]);

    return numSystemConversion(arr1).map((row, idx1) =>
        row
            .map((str, idx2) => +str || +numSystemConversion(arr2)[idx1][idx2])
            .join('')
            .replace(/1|0/g, (num) => (+num ? '#' : ' '))
    );
};

console.log(
    input.map((testcase) => {
        const [n, arr1, arr2] = testcase.split(' ');
        const maps = (arr) => arr.split(',').map(Number);
        return solution(+n, maps(arr1), maps(arr2));
    })
);
