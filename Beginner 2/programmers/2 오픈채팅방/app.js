/**
 * https://programmers.co.kr/learn/courses/30/lessons/42888
 * input: ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
 * output: ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 */

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (record) => {
    let map = new Map();
    let answer = [];
    const msg = {
        Enter: '님이 들어왔습니다.',
        Leave: '님이 나갔습니다.',
    };
    record.forEach((log) => {
        const [state, id, name] = log.split(' ');
        if (name) map.set(id, name);
        if (state !== 'Change') answer.push([state, id]);
    });
    return answer.map(([state, id]) => `${map.get(id)}${msg[state]}`);
};

console.log(solution(input));
