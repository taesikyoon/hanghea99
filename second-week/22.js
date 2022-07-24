function solution(s) {
    let words=["zero","one","two","three","four","five","six","seven","eight","nine"]
    var answer = [];
    for (let i = 0; i<words.length;i++){
        s = s.split(words[i]).join(i)
    }
        

    return parseInt(s);
    }
