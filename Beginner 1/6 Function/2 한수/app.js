/**
 * boj.kr #1065
 * input: 110
 * output: 99
 */

// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
const result = ( i, arr = `${i}`.split('').map(Number), size = arr.length ) => {
    let cnt = 99;
    let num = [];
    do {
        for( let x = 9 ; num[0] + (size - 1) * x < 10 ; x-- ) {

        }
        
    } while( compare( arr, num ))

    return cnt;

    // [ 1, 1, 1, 0 ]
    // console.log( compare( arr, num = [ 1, 1, 1, 0 ] ) );
}

const compare = ( a, b, index = 0 ) => {
    if( a[index] > b[index] ) 
        return true;
    else if( a[index] < b[index] )
        return false; 
    else if( a.length - index > 1 )
        return compare( a, b, index + 1 );
    else
        return true;
}

// input > hansu
// 1 1 1
// 1 2 3
// 1 3 5
// 1 4 7
// 1 5 9
// 2 1 0
// 2 2 2
// 2 3 4
// 2 4 6
// 2 5 8
// 3 3 3

console.log( +input < 100 ? +input : result( +input ) );