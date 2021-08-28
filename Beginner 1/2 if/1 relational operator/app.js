/**
 * boj.kr #1330
 * input: 1 2
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( ' ' );
const n1 = +input[0], n2 = +input[1];
console.log( n1 === n2 ?  "==" : ( n1 > n2 ?  ">" : "<" ) );