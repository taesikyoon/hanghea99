function solution(numbers) {
    var answer = [];
    for (let i = 0; i< numbers.length;i++){
        if (numbers[i+1]=== undefined) break
        for (let j=i+1; j< numbers.length;j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    answer=[...new Set(answer)].sort((a,b)=>{return a-b})
        
    
    return answer;
}