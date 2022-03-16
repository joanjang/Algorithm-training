function solution(arr1, arr2) {
    const common = arr1.filter((num) => arr2.includes(num));
    return common.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
