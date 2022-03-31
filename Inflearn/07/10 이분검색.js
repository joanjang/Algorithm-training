function solution(target, arr) {
    let firstIdx = 0,
        lastIdx = arr.length - 1;
    arr.sort((a, b) => a - b);
    while (firstIdx < lastIdx) {
        const midIdx = parseInt((firstIdx + lastIdx) / 2);
        if (arr[midIdx] === target) return midIdx + 1;

        if (arr[midIdx] > target) lastIdx = midIdx - 1;
        else firstIdx = midIdx + 1;
    }
    return -1;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
console.log(solution(1111, [23, 87, 65, 12, 57, 32, 99, 81, 1112]));
