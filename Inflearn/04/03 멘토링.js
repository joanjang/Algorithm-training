function solution(test) {
    let answer = 0;
    const n = test[0].length; // 4
    const m = test.length; // 3

    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (k === j) continue;
            for (let i = 0, count = 0; i < m; i++) {
                const mentor = test[i][j];
                const mentee = test[i][k];
                if (mentor > mentee) {
                    console.log(mentor, mentee, 'break');
                    break;
                }
                if (++count === m) answer++;
                console.log(i, '\\', mentor, mentee, count);
            }
        }
    }
    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
