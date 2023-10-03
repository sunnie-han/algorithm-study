function solution(n) {
    let answer = 0;
    const isEven = n % 2 === 0;
    const start = isEven? 2 : 1;
    
    for (let i=start; i<=n; i+=2) {
        answer += isEven? i**2 : i;
    }
    return answer;
}