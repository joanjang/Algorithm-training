function solution(arr) {
    const answer = [];
    arr.reduce((prev, curr) => {
        if (prev < curr) answer.push(curr);
        return curr;
    }, Number.MIN_SAFE_INTEGER);
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
