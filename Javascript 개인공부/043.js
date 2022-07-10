// 스코프 체인 이해하기
// 스코프 체인은 문자 그대로 스코프가 연결되어 있다를 나타낸다.
// 자바스크립트에서 스코프 체인을 이해하기 위해서는 실행 컨덱스트(Execution context)와 렉시컬 환경 (Lexical Environment)에 대해 먼저 알아야한다.

// 실행 컨텍스트는 코드가 실행되기 위해 필요한 정보를 가지고 있다.

let global = 30;

function scope() {
  let local = 21;
  console.log(global);
};

scope(); // 30
console.log(local); // Uncaught ReferenceError: local is not defined