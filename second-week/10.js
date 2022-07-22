function solution(arr) {
    let minNum = arr[0];
    var answer = [];
    let newidx=0;
    if (1 === arr.length) return [-1]
    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            console.log(arr[i]+" 어레이 i번째 값")
            minNum = arr[i]
            newidx=i
        }
    }
    arr.splice(newidx, 1)
    answer=arr
    return answer
}
console.log(solution([1, 3, 2, 4]))