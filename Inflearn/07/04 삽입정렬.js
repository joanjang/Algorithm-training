function solution(arr) {
    for (let i = 1; i < arr.length; i++) {
        const target = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (target >= arr[j]) break;
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = target;
    }
    return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
