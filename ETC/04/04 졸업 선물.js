function solution(m, product) {
    const priceArr = product.map(([p, _]) => p);
    const maxPriceIdx = priceArr.indexOf(Math.max(...priceArr));

    product[maxPriceIdx][0] /= 2;
    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    let cnt = 0;
    for (const [p, d] of product) {
        m -= p + d;
        if (m < 0) return cnt;
        cnt++;
    }

    return cnt;
}

console.log(
    solution(28, [
        [6, 6],
        [2, 2],
        [4, 3],
        [4, 5],
        [10, 3],
    ])
);

console.log(
    solution(100, [
        [6, 6],
        [2, 2],
        [4, 3],
        [10, 5],
        [10, 3],
    ])
);
