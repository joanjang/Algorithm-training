/**
 * https://programmers.co.kr/learn/courses/30/lessons/92334
 * input(id_list/report/k): ["muzi", "frodo", "apeach", "neo"] / ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"] / 2
 * output: [2,1,1,0]
 **/

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const solution = (id_list, report, k) => {
    let reportInfo = {};
    for (let log of [...new Set(report)]) {
        const [usr, reportUsr] = log.split(' ');
        const initial = (id) => ({
            ...reportInfo[id],
            ...{ count: 0, report: [] },
        });

        if (!reportInfo[usr]) reportInfo[usr] = initial(usr);
        if (!reportInfo[reportUsr]) reportInfo[reportUsr] = initial(usr);

        reportInfo[usr].report.push(reportUsr);
        reportInfo[reportUsr].count++;
    }

    return id_list.map((id) => {
        const { report } = reportInfo[id];
        return report.filter((reportId) => reportInfo[reportId].count >= k)
            .length;
    });
};

console.log(
    input.map((testcase) => {
        const [id_list, report, k] = testcase.split('/');
        const split = (arr) => arr.split(',');
        return solution(split(id_list), split(report), +k);
    })
);
