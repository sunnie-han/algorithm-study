function solution(arr, query) {
    let answer = [...arr];
    query.forEach((val, idx) => {
        if (idx % 2 === 0) {
            answer = answer.slice(0, val + 1);
        } else {
            answer = answer.slice(val);
        }
    })
    return answer;
}