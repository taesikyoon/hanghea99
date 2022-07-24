function solution(n) {
    
    let ch =n.toString(3).split("").reverse().join("")
    var answer = parseInt(ch, 3);
    return answer;
}
