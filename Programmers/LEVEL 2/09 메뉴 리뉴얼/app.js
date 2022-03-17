/**
 * https://programmers.co.kr/learn/courses/30/lessons/72411
 * input(orders/course): ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]
 * output: ["AC", "ACDE", "BCFG", "CDE"]
 **/

const [o, c] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (orders, course) => {
    const answer = [];

    const combination = (n, menu, order, result, start) => {
        if (result.length === n) {
            menu[result] = menu[result] ? ++menu[result] : 1;
            return;
        }
        for (let i = start; i < order.length; i++)
            combination(n, menu, order, result + order[i], i + 1);
    };

    const getMaxSet = (menu) => {
        const max = Math.max(...Object.values(menu));

        if (max === 1) return;
        for (const [key, value] of Object.entries(menu))
            if (value === max) answer.push(key);
    };

    course.forEach((cnt) => {
        const menu = {};
        orders.forEach(([...order]) =>
            combination(cnt, menu, order.sort().join(''), '', 0)
        );
        getMaxSet(menu);
    });
    return answer.sort();
};

console.log(solution(o.split(' '), c.split(' ').map(Number)));
