function solution(myString, pat) {
    let answer = 0;
    for(let i=0; i < myString.length; i++) {
        if (myString.substring(i, i + pat.length) === pat) {
            answer += 1;
        }
    }
    return answer;
}