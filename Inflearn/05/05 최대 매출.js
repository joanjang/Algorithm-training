function solution(k, arr) {
    let maxSales = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i <= arr.length - k; i++) {
        const salesForkDays = arr
            .slice(i, i + k)
            .reduce((prev, curr) => prev + curr);
        maxSales = Math.max(salesForkDays, maxSales);
    }
    return maxSales;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
