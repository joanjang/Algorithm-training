/**
 * https://programmers.co.kr/learn/courses/30/lessons/72410
 * input: ...!@BaT#*..y.abcdefghijklm
 * output: bat.y.abcdefghi
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

//  Others: 정규식 사용
const solution1 = (new_id) => {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') //4
        .replace(/^$/g, 'a') // 5
        .slice(0, 15)
        .replace(/\.$/g, ''); // 6
    return answer.length >= 3
        ? answer
        : answer + answer[answer.length - 1].repeat(3 - answer.length);
};

// Me: 함수 사용
const solution2 = (new_id) => {
    const lowercase = (newid) => possibleSign(new_id.toLowerCase());
    const possibleSign = ([...id]) =>
        comma1(
            id.filter(
                (c) =>
                    (c >= 'a' && c <= 'z') ||
                    (c >= '0' && c <= '9') ||
                    c === '-' ||
                    c === '_' ||
                    c === '.'
            )
        );
    const comma1 = (id) => {
        const arr = [id[0]];
        for (let i = 1; i < id.length; i++) {
            if (id[i] === '.' && id[i - 1] === '.') continue;
            arr.push(id[i]);
        }
        return removeComma(arr);
    };
    const removeComma = (id) => {
        if (id[0] === '.') id.shift();
        if (id[id.length - 1] === '.') id.pop();

        return isEmpty(id.join(''));
    };
    const isEmpty = (id) => checkLen16(id === '' ? 'a' : id);
    const removeLastComma = ([...id]) => {
        if (id[id.length - 1] === '.') id.pop();
        return id.join('');
    };
    const checkLen16 = (id) =>
        checkLen3(id.length > 15 ? removeLastComma(id.substring(0, 15)) : id);
    const checkLen3 = (id) =>
        id.length >= 3 ? id : id + id[id.length - 1].repeat(3 - id.length);
    return lowercase(new_id);
};

console.log(input.map((str) => solution1(str)));
