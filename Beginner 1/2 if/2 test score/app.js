/**
 * boj.kr #9498
 * input: 63
 */

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().trim();
console.log( +input >= 90 ? "A" : ( +input >= 80 ? "B" : ( +input >= 70 ? "C" : ( +input >= 60 ? "D" : "F" ) ) ) );