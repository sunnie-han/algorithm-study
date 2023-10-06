function solution(a, d, included) {
    let answer = 0;
    for (const idx in included) {
        const isIncluded = included[idx];
        if (isIncluded) {
            const value = a + d * idx;
            answer += value;
        }
    }
    return answer;
}