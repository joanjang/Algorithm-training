/**
 * https://programmers.co.kr/learn/courses/30/lessons/1844
 * input: [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
 * output: 11
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (maps) => {
    const queue = [[0, 0, 1]],
        [rowLen, colLen] = [maps.length - 1, maps[0].length - 1];

    maps[0][0] = 0;
    const move = (x, y, count) => {
        if (x < 0 || y < 0 || x > rowLen || y > colLen) return;
        if (maps[x][y] === 1) {
            maps[x][y] = 0;
            queue.push([x, y, count + 1]);
        }
    };

    while (queue.length > 0) {
        const [x, y, count] = queue.shift();
        if (x === rowLen && y === colLen) return count;

        move(x + 1, y, count);
        move(x, y + 1, count);
        move(x - 1, y, count);
        move(x, y - 1, count);
    }

    return -1;
};

console.log(
    input.map((arr) =>
        solution(arr.split(' ').map((i) => i.split(',').map(Number)))
    )
);
