function solution(s) {
    var answer = 0;
    let sArray = [...s];

    let countOfX = 0;
    let countOfOthers = 0;
    
    let x = sArray[0];
    let temp;
    while (temp = sArray.shift()) {
        if (temp === x){
            countOfX += 1;
        } else{
            countOfOthers += 1;
        }
        // console.log(`[${temp}] x: ${countOfX} others: ${countOfOthers}`)
        if (countOfX === countOfOthers) {
            answer += 1;
            x = sArray[0]
            countOfX = 0; 
            countOfOthers = 0;
        }
    }
    
    if (countOfX) answer += 1;
    return answer;
}