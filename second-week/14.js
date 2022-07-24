function solution(sizes) {
    let max=[];
    let min=[];
    var answer = 0;
    for (let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>{return a-b})
        min.push(sizes[i][0])
        max.push(sizes[i][1])
    }
    answer=Math.max(...min)*Math.max(...max)
    return answer;
}