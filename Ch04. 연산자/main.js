/*
연산자
- 어떠한 연산을 기호를 사용하여 수행한다.
*/

/*
문자열 병합
- 문자열은 + 연산자를 사용하여 병합할 수 있다.
*/
console.log("안녕" + "하세요");
console.log(typeof ("1" + 2)); // 문자열과 병합하면 number도 string이 된다.
console.log("1" + 2 + 3);
console.log(1 + 2 + "3"); // 문자열과 병합한 시점부터 바뀐다.


/*
산술 연산자
  x + y : 덧셈
  x - y : 뺄셈
  x * y : 곱셈
  x / y : 나눗셈
  x % y : 나머지
*/
let x = 9;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


/*
증강연산자
 ++x : 전위 증가(x에 1을 증가시킨 후에 명령문 수행)
 x++ : 후위 증가(현재 명령문을 수행 후에 x에 1을 증가)
 --x : 전위 감소(x에 1을 감소시킨 후헤 명령문 수행)
 x-- : 후위 감소(현재 명령문을 수행 후에 x에 1을 감소)
*/

// let result = ++x + y;
// let result = x++ + y;
// let result = --x + y;
let result = x-- + y;

console.log(result);
console.log(x);
console.log(y);

/*
비교 연산자
a > b : a가 b 보다 크다.
a < b : a가 b 보다 작다.
a >= b : a가 b 보다 크거나 같다.
a <= b : a가 b 보다 작거나 같다.
a == b : a 와 b는 같다.
a === b : a 와 b는 같다.(데이터 타입 까지)
a != b : a 와 b는 같지않다.
a !== b : a 와 b는 같지않다.(데이터 타입 까지)
*/
let a = 2;
let b = "2";
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

/*
할당 연산자
x += y : x = x + y 와 같다.
x -= y : x = x - y 와 같다.
x *= y : x = x * y 와 같다.
x /= y : x = x / y 와 같다.
*/
let i = 10;
let j = 20;
// i = i + j;
i += j;
console.log(i);

/*
논리 연산자
- 논리 연산자는 boolean값만 다룰 수 있지만 자바스크립트에서만
  모든 타입의 값을 받을 수 있고, 결과 역시 모든 타입이 될 수 있다.
- null, 0, NaN, 빈 문자열(""), undifined는 false로 간주한다.

AND 연산자(&&)
- 피연산자가 모두 true일 경우에 true를 반환하고 나머지는 false를 반환

OR 연산자(||)
- 피연산자가 하나라도 true면 true를 반환하고 나머지는 false를 반환

NOT 연산자(!)
- true면 flase를 반환하고 false면 true를 반환한다. 

단축 평가
- AND 연산에서 앞쪽 피연산자가 false일 때,
  OR 연산에서 앞쪽 피연산자가 ture일 때 나머지 피연산자의 평가를
  생략하고 그대로 반환한다.
*/
let a1 = true && true && true;
console.log(a1);
let a2 = true && false; // 모두 ture 가 아니기 때문에 false 출력
console.log(a2);
let a3 = true && (3 == 4);
console.log(a3);
let a4 = 111 && 222; // 
console.log(a4);
let a5 = 111 && false;
console.log(a5);
let a6 = null && undefined;
console.log(a6);

let o1 = true || false;
console.log(o1);
let o2 = false || false;
console.log(o2);
let o3 = true || 3 == 4;
console.log(o3);
let o4 = 111 || 222;
console.log(o4);
let o5 = false || 222;
console.log(o5);
let o6 = null || undefined;
console.log(o6);

let n1 = !false;
console.log(n1);
let n2 = !false;
console.log(n2);
let n3 = ! 3 == 4;
console.log(n3);
let n4 = ! 222;
console.log(n4);
let n5 = ! undefined;
console.log(n5);