function solution(arr) {
    let answer = 0,
        count = 0;
    for (const result of arr) {
        if (result === 0) {
            count = 0;
            continue;
        }
        answer += ++count;
    }
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
