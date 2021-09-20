/**
 * boj.kr #4673
 * output: 1
 *         3
 *         5
 *         7
 *         9
 *         20
 *         31
 *         42
 *         53
 *         64
 *         |
 *         |       <-- a lot more  numbers
 *         |
 *         9903
 *         9914
 *         9925
 *         9927
 *         9938
 *         9949
 *         9960
 *         9971
 *         9982
 *         9993
 */

// 셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 예를 들어, d(75) = 75+7+5 = 87이다.
// 생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
// 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
const arr = Array.from({
    length: 10000
}, (v, i) => i + 1);

[...arr].forEach( i => {
    const index = arr.findIndex(j => j === i + Number(Array.from(String(i)).reduce( (p, c) => +p + +c)));
    if( index > -1 ) 
        arr.splice( index, 1 );
});

arr.forEach( i => console.log( i ));