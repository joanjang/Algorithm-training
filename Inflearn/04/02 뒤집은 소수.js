function isPrime(num) {
    const sqrtN = Math.sqrt(num);
    for (let i = 2; i <= sqrtN; i++) if (num % i === 0) return false;
    return num > 1;
}
function solution(arr) {
    const answer = [];
    for (num of arr) {
        const reversedNumber = Number([...`${num}`].reverse().join(''));
        if (isPrime(reversedNumber) && !answer.includes(reversedNumber))
            answer.push(reversedNumber);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
