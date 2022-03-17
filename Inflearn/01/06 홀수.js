function solution(arr) {
    let sum = 0,
        min = Number.MAX_SAFE_INTEGER;
    for (const num of arr) {
        if (num % 2) {
            sum += min = num;
            if (num < min) min = num;
        }
    }

    return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
