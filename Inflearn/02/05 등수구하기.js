function solution(arr) {
    const sortedArr = [...arr].sort((a, b) => b - a);
    return arr.map((score) => sortedArr.indexOf(score) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
