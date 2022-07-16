function solution(arr, divisor) {
    var answer = [];
        for (const element of arr) {
        if(element % divisor == 0) answer.push(element)
    }
    if (answer.length === 0) answer.push(-1)
    console.log(answer)
    return answer.sort((a,b)=>{
        return a-b
    });
}
