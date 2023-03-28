function solution(x, y, n) {
    var answer = 0;
    
    let dp = Array.from({length: 1000001}, () => -1);
    dp[x] = 0;
    
    const isOk = (value, newTimes) => {
        const currentTimes = dp[value];
        return value <= 1000000 && (newTimes < currentTimes || currentTimes === -1);
    }
    
    for (let value = 0; value <= 1000000; value++) {
       if (value === y) {
            answer = dp[value];
        }
        const times = dp[value];
        if (times > -1){
            const newTimes = times + 1;
            const addN = value + n;
            if (isOk(addN, newTimes)) {
                dp[addN] = newTimes;
            }
            const multi2 = value * 2;
            if (isOk(multi2, newTimes)) {
                dp[multi2] = newTimes;
            }
            const multi3 = value * 3;
            if (isOk(multi3, newTimes)) {
                dp[multi3] = newTimes;
            }
        }  
    };
    
    // console.log(dp.splice(x, y))
    
    return answer;
}