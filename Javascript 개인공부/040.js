// 함수 호이~스팅 이해하기
// 호이호이

hello();
function hello() {
    console.log("안녕하세여!")
}



hello2();
let hello2 = function() {
    console.log("하이")
}

// 호이스팅을 일단은 가볍게 이해해보자 
// 정리하자면 이러하다 function으로는 상단에 참조 할당이 가능하지만
// let, const 는 상단에 참조 할당이 가능하지 않다 정도로 알면될거같다.