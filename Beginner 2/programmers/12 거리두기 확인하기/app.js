/**
 * https://programmers.co.kr/learn/courses/30/lessons/81302
 * input(str1/str2): [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
 * output: [1, 0, 1, 1, 1]
 **/

const p = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((arr) => arr.split(' '));

const solution = (places) => {
    let answer = [];

    const checkRowCol = (arr, idx) =>
        arr[idx + 1] === 'P'
            ? false
            : arr[idx + 2] === 'P'
            ? arr[idx + 1] !== 'O'
            : true;

    const checkdiagonal = (room, col) => {
        const left =
            room[1][col - 1] === 'P'
                ? !(room[0][col - 1] === 'O' || room[1][col] === 'O')
                : true;
        const right =
            room[1][col + 1] === 'P'
                ? !(room[0][col + 1] === 'O' || room[1][col] === 'O')
                : true;
        return col > 0 ? left && right : right;
    };

    for (const room of places) {
        let result = true;
        for (let j = 0; j < room.length; j++) {
            for (let i = 0; i < room[j].length; i++) {
                if (room[j][i] !== 'P') continue;
                if (i < room[j].length - 1) {
                    if (!checkRowCol(room[j], i)) {
                        result = checkRowCol(room[j], i);
                        break;
                    }
                }
                if (j < room.length - 1) {
                    if (
                        !checkRowCol(
                            room.map(([...state]) => state[i]),
                            j
                        )
                    ) {
                        result = checkRowCol(
                            room.map(([...state]) => state[i]),
                            j
                        );
                        break;
                    }
                    result = checkdiagonal(room.slice(j, j + 2), i);
                }
            }
            if (!result) break;
        }
        answer.push(result ? 1 : 0);
    }
    return answer;
};

console.log(solution(p));
