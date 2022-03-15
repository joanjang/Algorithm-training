function solution(s) {
    return s.reduce(
        (max, cur) => {
            const len = cur.length;
            return len > max.len ? { value: cur, len } : max;
        },
        { value: '', len: Number.MIN_SAFE_INTEGER }
    ).value;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
