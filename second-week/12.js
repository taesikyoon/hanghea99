function solution(x) {
    var answer = true;
    
    let str=String(x).split("")
    console.log(str)
    let sumNum=0
    for (let i =0; i<str.length;i++){
        sumNum+= parseInt(str[i])
    }
    if (x%sumNum === 0) return true;
    else return false

}