function solution(n) {
    
    var answer = [];
    str=String(n)
    for (let i =0; i<str.length;i++){
        answer.push(parseInt(str[i]))
    }
    function sort_A(a,b){
        return b-a
    }
    answer.sort(sort_A)
    answer=Number(answer.join(""))
    
    return answer;
}
