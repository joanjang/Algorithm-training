function solution(s) {
    // return [...new Set(s)].join('');
    let answer = [];
    for (const str of s) if (answer.indexOf(str) === -1) answer.push(str);
    return answer;
}
console.log(solution('ksekkset'));
