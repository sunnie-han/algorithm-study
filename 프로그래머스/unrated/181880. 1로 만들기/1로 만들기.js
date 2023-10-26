function solution(num_list) {
    let answer = 0;
    num_list.forEach(num => {
        let temp = 0;
        while (num !== 1) {
            temp += 1;
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
        }
        answer += temp;
    });
    
    return answer;
}