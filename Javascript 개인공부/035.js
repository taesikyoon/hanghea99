// 예외 처리하기
function checkNumber(val) {
    if (typeof val !==  "number") throw "유효하지 않은 값입니다.";
    console.log("숫자형으로 확인되었습니다.");

}


try {
    checkNumber(100);
    checkNumber("100");
    checkNumber("Wrong type");
} catch (error) {
    console.log(error)
} finally {
    console.log('완료')
}

