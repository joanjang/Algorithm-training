/**
 * boj.kr #2588
 * input: 472
 *        385
 * output: 2360
 *         3776
 *         1416
 *         181720
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( '\n' );
const solution = ( a, b ) => {
    console.log( a * ( b % 10 ) );
    console.log( a * Math.floor( ( b % 100 ) / 10 ) );
    console.log( a * Math.floor( b / 100 ) );
    console.log( a * b );
}

solution( +input[0], +input[1] );