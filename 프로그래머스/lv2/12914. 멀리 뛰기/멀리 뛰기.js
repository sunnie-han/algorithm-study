const jump = (n, dp) => {
    if (n < 0) return 0
    if (dp[n] > 0) return dp[n]
    
    dp[n-1] = jump(n-1, dp)
    dp[n-2] = jump(n-2, dp)
    
    return (dp[n-1] + dp[n-2]) % 1234567
}
function solution(n) {
    const dp = Array(n).fill(0)
    dp[0] = 1
    let answer = jump(n, dp)
    
    return answer
}