function solution(s) {
    return [...s]
        .map((str) =>
            str.search(/[A-Z]/) === 0 ? str.toLowerCase() : str.toUpperCase()
        )
        .join('');
}

console.log(solution('StuDY'));
