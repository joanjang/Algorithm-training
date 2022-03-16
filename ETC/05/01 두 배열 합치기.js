function solution(arr1, arr2) {
    const concat = [...arr1, ...arr2];
    return concat.sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
