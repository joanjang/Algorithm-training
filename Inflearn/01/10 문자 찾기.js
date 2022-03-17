function solution(s, t) {
    // const regex = new RegExp(t, 'g');
    // return s.match(regex).length;
    let cnt = 0;
    for (const str of s) if (str === t) cnt++;

    return cnt;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
