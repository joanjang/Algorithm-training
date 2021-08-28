/**
 * boj.kr #9498
 * input: 63
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( ' ' );
console.log( +input[0] >= 90 ? "A" : ( +input[0] >= 80 ? "B" : ( +input[0] >= 70 ? "C" : ( +input[0] >= 60 ? "D" : "F" ) ) ) );