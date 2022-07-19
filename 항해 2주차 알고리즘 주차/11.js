function solution(num) {
    if (num === 1) return 0;
    let cnt =0;
    var answer = 2;
    while (num !== 1) {
        if (cnt === 500) return -1
        if (num % 2 == 0) {
            num/=2
            cnt++
        }
        else {
            num=num*3+1
            cnt++
        }
    }
    answer=cnt

    return cnt;
}