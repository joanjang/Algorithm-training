function solution(arr) {
    let max = Number.MIN_SAFE_INTEGER,
        count = 0;
    for (const height of arr) {
        if (height >= max) {
            max = height;
            count++;
        }
    }
    return count - 1;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
