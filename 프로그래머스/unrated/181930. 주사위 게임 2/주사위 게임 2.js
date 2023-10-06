function solution(a, b, c) {
    const set = new Set([a, b, c]);
    
    let answer = 1;
    for (let exponent = 1; exponent <= 4 - set.size; exponent++) {
        answer *= Math.pow(a, exponent) + Math.pow(b, exponent) + Math.pow(c, exponent);
    }
    return answer;
}