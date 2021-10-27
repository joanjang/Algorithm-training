/**
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * input(boared/moves): [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
 *                      [1,5,3,5,1,2,1,4]
 * output: 4
 **/

const [b, m] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (board, moves) => {
    let cnt = 0;
    const stack = [];
    moves.forEach((i) => {
        const idx = board.findIndex((arr) => arr[i - 1] > 0);
        console.log(i, idx);
        if (idx > -1) {
            cnt++;
            if (stack[stack.length - 1] !== board[idx][i - 1])
                stack.push(board[idx][i - 1]);
            else stack.pop();
            board[idx][i - 1] = 0;
            console.log(board[idx]);
        }
    });
    return cnt - stack.length;
};

console.log(
    solution(
        b.split(' ').map((i) => i.split(',').map(Number)),
        m.split(',').map(Number)
    )
);
