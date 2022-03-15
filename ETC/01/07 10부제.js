function solution(day, arr) {
    let count = 0;
    for (const num of arr) if (num % 10 === day) count++;
    return count;
}

arr = [
    [3, [25, 23, 11, 47, 53, 17, 33]],
    [0, [12, 20, 50, 30, 87, 91, 30]],
];
console.log(arr.map(([day, arr]) => solution(day, arr)));
