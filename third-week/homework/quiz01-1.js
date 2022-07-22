// ❓ 1. 생년월일을 입력받아 만 나이 계산하는 함수 작성

// - 상세보기
// - 만 나이는 한국에서의 나이와 다르게 0살부터 시작합니다!
// - 매 해마다 1살을 먹는게 아닌, 생일이 지난 시점마다 1살을 먹습니다!
    

function getAge(y,m,d) {
// 자바스크립트에 내장된 Date 객체를 이용하면 현재 시간을 구할 수 있다.
    const now = new Date();
    const birth = new Date(y,m,d);
    console.log(now.getFullYear())
    console.log(birth.getFullYear())
    let age = now.getFullYear()- birth.getFullYear()+1
    return age
// 코드 작성
}

console.log(getAge(1997,4,28));
// Print: 32

    
//위 코드가 동작할 수 있게 `// 코드 작성` 부분에 코드를 작성해보세요.
// 단, 위 예시는 2022년 시점에서 계산된 만 나이이며, 여러분이 실행하는 시점에 따라 만 나이는 다르게 계산될 수 있습니다!

// 튜터님 답안
```jsx
function getAge(dateOfBirth) {
  // 자바스크립트에 내장된 Date 객체를 이용하면 현재 시간을 구할 수 있다.
  const now = new Date();
  const birth = new Date(dateOfBirth);

  const age = now.getFullYear() - birth.getFullYear();
  const isBirthdayOver =
    now.getMonth() - birth.getMonth() >= 0 &&
    now.getDate() - birth.getDate() >= 0;

  if (isBirthdayOver) {
    return age;
  }

  return age - 1;
}
```
// 만나이를 생일이 지나면 +1 아니면 자기나이보다 한살 빼야하니 이게맞다.