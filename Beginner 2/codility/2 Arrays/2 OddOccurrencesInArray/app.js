/**
 * https://app.codility.com/c/run/trainingB6BPGZ-NMA/
 * input(A): [9, 3, 9, 3, 9, 7, 9]
 * output: 7
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N) or O(N*log(N))
const solution = (A) => {
    A = A.reduce((acc, num) => {
        acc[num] = acc[num] + 1 || 1;
        return acc;
    }, {});

    for (key in A) if (A[key] % 2) return +key;
};

// 시간 복잡도: O(N**2)
const solution2 = (A) => {
    A = [...new Set(A)].map((num) => [
        num,
        A.filter((_num) => num === _num).length,
    ]);

    for (let [key, value] of A) if (value % 2) return key;
};

// 시간 복잡도: O(N**2)
const solution1 = (A) => {
    const arr = [];
    A.forEach((num) => {
        const index = arr.indexOf(num);
        if (index > -1) arr.splice(index, 1);
        else arr.push(num);
    });
    return arr[0];
};

console.log(input.map((A) => solution(A.split(',').map(Number))));
