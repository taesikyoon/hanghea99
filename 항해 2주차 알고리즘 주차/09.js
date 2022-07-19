function solution(n) {
    var answer = Math.sqrt(n);
    if (Number.isInteger(answer)) answer=Math.pow(answer+1, 2);
    else return -1
    

    return answer;
}