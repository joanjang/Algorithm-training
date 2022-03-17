/**
 * boj.kr #8958
 * input: 5
 *        OOXXOXXOOO
 *        OOXXOOXXOO
 *        OXOXOXOXOXOXOX
 *        OOOOOOOOOO
 *        OOOOXOOOOXOOOOX
 * output: 10
 *         9
 *         7
 *         55
 *         30
 */

//  "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.
//  "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');
const reducer = (pre, cur) => pre + cur;
input.shift();
input.forEach((q) => {
    const arr = q
        .split('X')
        .filter((i) => i.length > 0)
        .map((i) =>
            Array.from(i)
                .map((i, index) => index + 1)
                .reduce(reducer)
        );
    console.log(arr.reduce(reducer));
});
