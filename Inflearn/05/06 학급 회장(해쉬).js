function solution(s) {
    let candidates = new Map(),
        answer = '';
    [...s].forEach((cnddt) => {
        candidates.set(cnddt, candidates.get(cnddt) + 1 || 1);
    });

    let max = Number.MIN_SAFE_INTEGER;
    for (const [candidate, count] of candidates) {
        if (count > max) {
            max = count;
            answer = candidate;
        }
    }

    return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
