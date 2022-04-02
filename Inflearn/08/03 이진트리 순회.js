function solution(n) {
    let 전위순회 = '',
        중위순회 = '',
        후위순회 = '';
    function DFS(val) {
        if (val > 7) return;
        전위순회 += `${val} `;
        DFS(val * 2);
        중위순회 += `${val} `;
        DFS(val * 2 + 1);
        후위순회 += `${val} `;
    }
    DFS(n);
    return [전위순회.trim(), 중위순회.trim(), 후위순회.trim()];
}

console.log(solution(1));
