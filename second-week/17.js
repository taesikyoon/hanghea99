function solution(lottos, win_nums) {

    let lots=lottos.sort((a,b)=>{return a-b})
    let winN=win_nums.sort((a,b)=>{return a-b})
    let highes =0
    let lowest =0
    let cnt =0;
    const KEY = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    for (let i=0; i<lots.length;i++){
        if (lots[i] === 0) {
            highes++
            continue
        }
        console.log("여섯번 찍히는지 볼거에요"+ i + " 로우스트의 값은? "+ lowest)
        for (let j = 0; j< winN.length;j++){
            if (lots[i] === win_nums[j]){
                cnt=1
            }
        }
        if (cnt === 1) {
            lowest++
            highes++
            cnt=0
            
        }
    }

    let answer = [KEY[highes],KEY[lowest]]

    return answer;
}