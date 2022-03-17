function solution(s) {
    return [...s].map((str) => str.toUpperCase()).join('');
}
let str = 'ItisTimeToStudy';
console.log(solution(str));
