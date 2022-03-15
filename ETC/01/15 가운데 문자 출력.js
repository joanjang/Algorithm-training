function solution(s) {
    const len = s.length;
    const midLen = Math.floor(len / 2);
    return s.substring(len % 2 ? midLen : midLen - 1, midLen + 1);
}

console.log(solution('study'));
console.log(solution('studyy'));
