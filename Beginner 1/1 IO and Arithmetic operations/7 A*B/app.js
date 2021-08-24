/**
 * boj.kr #10998
 * input: 12 4
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( ' ' );
console.log( +input[0] * +input[1] );