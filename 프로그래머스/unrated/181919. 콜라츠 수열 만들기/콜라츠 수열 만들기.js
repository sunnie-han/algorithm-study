function solution(n) {
    let answer = [];
    
    let temp = n;
    while (temp !== 1) {
        answer.push(temp);
        
        if (temp % 2 === 0) {
            temp = temp / 2;
        } else {
            temp = 3 * temp + 1;
        }
    }
    answer.push(temp);
    return answer;
}