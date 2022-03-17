function solution(arr) {
    let answer = [];
    const total = arr.reduce((pre, cur) => pre + cur);
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++)
            if (total - (arr[i] + arr[j]) === 100)
                answer.push(...arr.slice(0, i), ...arr.slice(j + 1));
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
