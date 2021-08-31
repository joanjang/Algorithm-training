/**
 * boj.kr #2884
 * input: 0 30
 * output: 23 45
 */

// Set an alarm earlier than 45 min
// 45분 일찍 알람 설정하기

const input = require('fs').readFileSync( process.platform === "linux" ? "/dev/stdin" : "./input.txt" ).toString().split( ' ' );
let hh = +input[0], mm = +input[1];
if( mm < 45 ) {
    mm += 15;
    hh = hh > 0 ? hh - 1 : 23 ;
}
else
    mm -= 45;
console.log( hh, mm );