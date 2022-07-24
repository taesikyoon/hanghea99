function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let giveUpMath1=0;
    let giveUpMath2=0;
    let giveUpMath3=0;
    for (let i=0; i<answers.length;i++){
        if (answers[i]===first[i%first.length]) giveUpMath1++
        if (answers[i]===second[i%second.length]) giveUpMath2++
        if (answers[i]===third[i%third.length]) giveUpMath3++
    }
    let score=[giveUpMath1,giveUpMath2,giveUpMath3];
    let criterion= Math.max(...score);
    let answer =[];
    for (let i=0; i<score.length;i++){
        if (criterion === score[i]) answer.push(i+1)
    }
    return answer;
}