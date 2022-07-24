function solution(arr) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == arr[i + 1]) {
            continue
        } else {
            answer.push(arr[i])
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return answer;
}