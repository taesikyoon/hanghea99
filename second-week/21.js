const isPrime = (n) => {
    for (let i = 2; i < n/2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}

function solution(nums) {
    var answer = [];
    
    for (let i =0;i<nums.length;i++){
        for (let j =i+1;j<nums.length;j++){
            for (let k =j+1;k<nums.length;k++){
                if (isPrime((nums[i]+nums[j]+nums[k])) === true) answer.push((nums[i]+nums[j]+nums[k]))
                }
            }
        }
    let set_answer =new Set(answer);
    return answer.length
    }

