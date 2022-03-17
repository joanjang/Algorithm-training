/**
 * https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * input: [0, 1, 0, 1, 1]
 * output: 5
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

// 시간복잡도: O(N)
const solution = (A) => {
    let oneCount = A.filter((num) => num === 1).length,
        result = 0;

    for (let num of A) {
        if (num === 0) result += oneCount;
        else oneCount--;

        if (result > 1000000000) return -1;
    }

    return result;
};

console.log(
    input.map((A) => {
        return solution(A.split(',').map(Number));
    })
);
