function solution(my_string, m, c) {
    let answer = '';
    let idx = c - 1;
    while (idx < my_string.length) {
        answer += my_string[idx];
        idx += m;
    }
    return answer;
}