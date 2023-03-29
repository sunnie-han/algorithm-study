function solution(weights) {
    var answer = 0;
    let pairRates = [1, 1/2, 2, 3/2, 2/3, 4/3, 3/4];
    
    let visited = {};
    
    for (let current of weights) {
        pairRates.forEach((rate) => {
            if (visited[current * rate]) {
                answer += visited[current * rate];
            }
        });
        
        if (!visited[current]) {
            visited[current] = 1;
        } else {
            visited[current] += 1;
        }
    }
    return answer;
}