// 카카오 캐시 문제 변형
function solution(size, arr) {
    const answer = new Array(size).fill(0);
    arr.forEach((data) => {
        const existedIndex = answer.indexOf(data);
        if (existedIndex > -1) answer.splice(existedIndex, 1);
        else answer.pop();
        answer.unshift(data);
    });
    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
