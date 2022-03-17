/**
 * https://programmers.co.kr/learn/courses/30/lessons/42860
 * input: "JAZ"
 * output: 11
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (name) => {
    const changeCharCodeCount = (code) => (code > 77 ? 91 - code : code - 65);
    const minMoveCount = (tempName = {}, moveCnt = 0) => {
        [...name].forEach((ch, idx) => (tempName[idx] = ch === 'A' ? 1 : 0));
        for (
            let i = 0, goRight = true;
            Object.values(tempName).indexOf(0) > -1;
            goRight ? i++ : i--, moveCnt++
        ) {
            if (!goRight || name[i] !== 'A') tempName[i] = 1;
            else {
                const clacCloseToCharIndexNotA = (arr, idx) => {
                    const findIndexNotA = (arr) =>
                        arr.findIndex((ch) => ch !== 'A');
                    return [
                        arr.length - 1 - findIndexNotA([...arr].reverse()),
                        findIndexNotA([...arr]),
                    ].map((curIdx) => curIdx + idx);
                };
                const isFirstIndexof = (idx) => (idx ? 1 : 0);
                const [leftIdx, rightIdx] = clacCloseToCharIndexNotA(
                        [...name].slice(i),
                        i
                    ),
                    [leftDst, rightDst] = [
                        name.length - leftIdx + i - isFirstIndexof(i),
                        rightIdx - i + isFirstIndexof(i),
                    ];
                moveCnt += Math.min(...[leftDst, rightDst]) - 1;
                goRight = leftDst >= rightDst;
                tempName[(i = goRight ? rightIdx : leftIdx)] = 1;
            }
        }
        return moveCnt > 0 ? moveCnt - 1 : moveCnt;
    };
    return [...name].reduce(
        (acc, cur, idx) =>
            cur === 'A' ? acc : acc + changeCharCodeCount(name.charCodeAt(idx)),
        minMoveCount()
    );
};

console.log(input.map((nm) => solution(nm)));
