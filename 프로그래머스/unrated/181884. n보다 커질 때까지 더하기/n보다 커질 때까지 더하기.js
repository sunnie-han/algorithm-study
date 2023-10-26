function solution(numbers, n) {
    let answer = 0;
    for (const number of numbers) {
        if (answer > n) {
            return answer;
        }
        answer += number;
    }
    return answer;
}