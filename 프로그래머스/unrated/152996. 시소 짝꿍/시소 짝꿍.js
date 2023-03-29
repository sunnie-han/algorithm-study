function solution(weights) {
    var answer = 0;
    let pairRates = [1, 2, 3/2, 4/3];
    
    let visited = {};
    
    let w = weights.sort((a,b)=> b - a);
    
    for (let current of w) {
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