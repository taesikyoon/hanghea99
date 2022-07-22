function solution(n) {
    
    var answer = [];
    str=String(n)
    for (let i =0; i<str.length;i++){
        answer.push(parseInt(str[i]))
    }
    answer.reverse().join()
    return answer;
}
