function solution(triangle) {
    let answer = 0;
    
    const height = triangle.length;
    const dp = Array.from(Array(height), () => Array(height).fill(0));
    
    dp[0][0] = triangle[0][0];
    
    for (let x=1; x<height; x++) {
        for (let y=0; y<x+1; y++) {
            if (y === 0) {
                dp[x][y] = dp[x-1][y] + triangle[x][y];
            } else {
                dp[x][y] = Math.max(dp[x-1][y-1], dp[x-1][y]) + triangle[x][y];
            }
            if (x === height-1) {
                answer = Math.max(answer, dp[x][y])
            }
        }
    }
    return answer;
}