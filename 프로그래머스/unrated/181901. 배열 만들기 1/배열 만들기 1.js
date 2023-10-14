function solution(n, k) {
    var answer = [];
    let temp = k;
    while (temp <= n) {
        answer.push(temp);
        temp += k;
    }
    return answer;
}