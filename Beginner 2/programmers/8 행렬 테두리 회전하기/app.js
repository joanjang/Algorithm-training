/**
 * https://programmers.co.kr/learn/courses/30/lessons/77485
 * input(rows/columns/queries): 6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]
 * output: [8, 10, 25]
 */

const [r, c, q] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(',');

const solution = (rows, columns, queries) => {
    const map = Array.from(Array(rows), (x, xi) =>
        Array.from(Array(columns), (y, yi) => xi * columns + yi + 1)
    );

    const selectMin = ([x1, y1, x2, y2]) => {
        const arr = [];
        for (let i = y1 - 1; i < y2 - 1; i++) arr.push(map[x1 - 1][i]);
        for (let i = x1 - 1; i < x2 - 1; i++) arr.push(map[i][y2 - 1]);
        for (let i = y2 - 1; i > y1 - 1; i--) arr.push(map[x2 - 1][i]);
        for (let i = x2 - 1; i > x1 - 1; i--) arr.push(map[i][y1 - 1]);

        const turn = (...arr) => {
            const temp = arr.pop();
            arr.unshift(temp);

            for (let i = y1 - 1; i < y2 - 1; i++) map[x1 - 1][i] = arr.shift();
            for (let i = x1 - 1; i < x2 - 1; i++) map[i][y2 - 1] = arr.shift();
            for (let i = y2 - 1; i > y1 - 1; i--) map[x2 - 1][i] = arr.shift();
            for (let i = x2 - 1; i > x1 - 1; i--) map[i][y1 - 1] = arr.shift();
        };
        turn(...arr);
        return Math.min(...arr);
    };

    return queries.map((arr) => selectMin(arr));
};

console.log(
    solution(
        +r,
        +c,
        q.split('\n').map((str) => str.split(' ').map(Number))
    )
);
