function solution(n, arr) {
    return arr.reduce(
        (acc, curr) => {
            const sum = [...`${curr}`].reduce((prev, curr) => +prev + +curr);
            if (sum > acc.max) return { value: curr, max: sum };
            else if (sum === acc.max)
                return {
                    ...acc,
                    ...{ value: curr > acc.value ? curr : acc.value },
                };
            return acc;
        },
        { value: 0, max: Number.MIN_SAFE_INTEGER }
    ).value;
}

let arr = [128, 460, 603, 40, 521, 137, 317];
console.log(solution(7, arr));
