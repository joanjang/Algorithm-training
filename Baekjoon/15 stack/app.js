/**
 * https://www.acmicpc.net/problem/10828
 **/

//  정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
//
//  push X: 정수 X를 스택에 넣는 연산이다.
//  pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//  size: 스택에 들어있는 정수의 개수를 출력한다.
//  empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
//  top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = ([_, ...commands]) => {
    let stack = [],
        answer = '';
    const checkCMD = (command, value) => {
        const len = stack.length,
            isEmpty = len > 0;
        switch (command) {
            case 'push':
                stack.push(value);
                break;
            case 'pop':
                return isEmpty ? stack.pop() : -1;
            case 'size':
                return len;
            case 'empty':
                return isEmpty ? 0 : 1;
            case 'top':
                return isEmpty ? stack[len - 1] : -1;
        }
    };
    commands.forEach((command) => {
        const [cmd, value] = command.split(' ');
        const result = checkCMD(cmd, value);
        if (result !== undefined) answer += result + '\n';
    });
    console.log(answer.trim());
};

solution(input);
