/**
 * boj.kr #10869
 * input: a b
 * output: a+b
 *         a-b
 *         a*b
 *         a/b(quotient)
 *         a%b(remainder)
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( ' ' );
const solution = ( a, b ) => {
    console.log( a + b );
    console.log( a - b );
    console.log( a * b );
    console.log( Math.floor( a / b ) );
    console.log( a % b );
}

solution( +input[0], +input[1] );