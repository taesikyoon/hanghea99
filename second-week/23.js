function solution(s, n) {
    var answer = '';
    let result =[];
    s=s.split("")
    console.log(s)
    for (let i=0;i<s.length;i++){
        if (s[i]=== ' ') console.log("Gd")
        s=s[i].charCodeAt(0)+1
     
         
        
        
    }
    console.log(s)
29
    for (let i=0;i<s.length;i++){
    
        answer+=String.fromCharCode(s[i]);
    }

    return answer;
}