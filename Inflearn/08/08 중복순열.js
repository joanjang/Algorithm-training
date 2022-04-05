function solution(n, m) {
    const answer = [];
    function DFS(count, result = []) {
        if (count === 0) return answer.push(result);
        for (let i = 1; i <= n; i++) {
            const tmp = [...result];
            tmp.push(i);
            DFS(count - 1, tmp);
        }
    }
    DFS(m);
    return answer;
}

console.log(solution(3, 2));
