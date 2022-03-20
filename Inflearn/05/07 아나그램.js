function solution(str1, str2) {
    let answer = 'YES';
    const mapByChar = new Map();
    [...str1].forEach((s) => {
        mapByChar.set(s, mapByChar.get(s) + 1 || 1);
    });
    for (const s of str2) {
        const count = mapByChar.get(s);
        if (!mapByChar.has(s) || count < 1) return 'NO';
        mapByChar.set(s, count - 1);
    }
    return answer;
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('ACaAeCe', 'baeeACA'));
