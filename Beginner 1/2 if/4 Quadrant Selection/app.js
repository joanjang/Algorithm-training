/**
 * boj.kr #14681
 * input: 12
 *        5
 * output: 1
 */

//  윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
//  예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 
// 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( '\n' );
console.log( +input[0], +input[1] );
const isXPositive = +input[0] > 0, isYPositive = +input[1] > 0;
console.log( isXPositive ? ( isYPositive ? 1 : 4 ) : ( isYPositive ? 2 : 3 ) );