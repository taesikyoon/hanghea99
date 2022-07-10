// let으로 변수 선언하기

if (true) {
    var fucntionScopeValue = 'global'
    let blockScopeValue = "local";
}
console.log(fucntionScopeValue); 
console.log(blockScopeValue);
// var 키워드로 정의하면 변수는 함수 단위의 유효 범위를 가지게 되어 if문의 블록에서 정의하여도 블록 밖에서 접근이 가능하다.
// let 키워드로 정의하면 변수는 블록단위의 유효 범위를 가지게 되어 if 문의 블록 밖에서 ㅈ버근할경우 ReferenceError 가 발생한다.


let value = "바깥값";
if (true) {
    console.log(value);
    let value = "안쪽값";
}

// 위에 설명했듯 let 키워드로 정의하면 블록단위의 유효 범위로 된다 
// 16번 줄이 없었다면 console.log(value) 전역에 참조된 value의 참조값 바깥값이 출력되지만
// 16번 줄로 인해서 if문 블록안에서 위쪽으로 호이스팅이 되어 
// 실제 let 선언이 이루어지기 전까지 일시적으로 접근이 안되는 영역을 만들어버린다.