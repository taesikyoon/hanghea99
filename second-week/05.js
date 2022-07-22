function solution(s) {
    answer= "";
    let str = s.split(" ")
    for (let i =0; i<str.length;i++){
        for (let j= 0;j<str[i].length;j++){
            if (j==0 || j % 2 == 0) {
                // str[i]+=str[i][j].replace(str[i][j],str[i][j].toUpperCase())
                answer+=str[i][j].toUpperCase()
            }
            else answer+=str[i][j].toLowerCase()
        }
        answer+=" "
    }

    return answer;
    
}