function solution(s) {
    var answer = s.split("").sort().reverse().join("");
    return answer;
}
// 문자열을 정렬 시킨다.
// 정렬 함수를 사용했을 때 sort()는 작은것부터 큰것으로 정렬해준다.
//  이를 알고있으니 reverse()로 역전 시켜준다면 큰것부터 작은것으로 정렬하게 되었다.