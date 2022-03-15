function solution(s) {
    // return s.match(/[A-Z]/g).length;
    let cnt = 0;
    for (const str of s) {
        const code = str.charCodeAt(0);
        if (code >= 65 && code <= 90) cnt++;
        // if(x===x.toUpperCase()) cnt++;
    }
    return cnt;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
