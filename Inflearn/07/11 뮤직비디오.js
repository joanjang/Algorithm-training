// 결정알고리즘
function solution(m, songs) {
    let minCpct = Math.max(...songs),
        maxCpct = songs.reduce((prev, curr) => prev + curr);
    const splitedCount = (cpct) => {
        let count = 1,
            sum = 0;
        for (const song of songs) {
            if (sum + song <= cpct) sum += song;
            else {
                sum = song;
                count++;
            }
        }
        return count;
    };
    while (minCpct <= maxCpct) {
        let midCpct = parseInt((minCpct + maxCpct) / 2);
        if (splitedCount(midCpct) > m) minCpct = midCpct + 1;
        else maxCpct = midCpct - 1;
    }
    return minCpct;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
