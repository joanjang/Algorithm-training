function solution(s) {
    // return s.replace(/A/g, '#');
    let answer = '';
    for (const str of s) {
        if (str === 'A') answer += '#';
        else answer += str;
    }
    return answer;
}

let str = 'BANANA';
console.log(solution(str));
