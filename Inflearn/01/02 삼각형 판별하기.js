function solution(a, b, c) {
    const total = a + b + c,
        max = Math.max(...[a, b, c]);
    if (total - max <= max) return 'NO';
    return 'YES';
}

console.log(solution(13, 33, 17));
