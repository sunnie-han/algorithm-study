function solution(m, n, puddles) {
    const isPuddle = (arr) => {
        for (const puddle of puddles) {
            if (arr[0] === puddle[0] && arr[1] === puddle[1]) {
                return true;
            }
        }
        return false;
    }
    
    const dp = Array.from(Array(n+1), () => Array(m+1).fill(0));
    
    for(let y=1; y<=n; y++) {
        for(let x=1; x<=m; x++) {
            if (x === 1 && y === 1) {
                dp[y][x] = 1;
                continue;
            }
            if(isPuddle([x, y])) {
                continue;
            }
            dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % 1000000007;
        }
    }
    
    return dp[n][m];
}