function solution(land) {
    const dp = Array(4).fill(0)
    for (const row of land) {
        const temp = [...dp]
        for (let i = 0; i < 4; i++) {
            dp[i] = Math.max(...(temp.filter((_, index) => index !== i))) + row[i]
        }
    }
    return Math.max(...dp)
}