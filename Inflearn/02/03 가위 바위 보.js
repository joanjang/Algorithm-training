function solution(a, b) {
    const bWin = [2, 3, 1];
    const match = (a, b) => {
        if (a === b) return 'D';
        if (bWin[a - 1] === b) return 'B';
        return 'A';
    };

    return a.map((a, index) => match(a, b[index]));
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
