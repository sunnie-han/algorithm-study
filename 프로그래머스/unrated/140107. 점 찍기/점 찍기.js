const isOver = (spot, d) => {
    const {x, y} = spot
    return Math.pow(x, 2) + Math.pow(y, 2) > Math.pow(d, 2)
}

function solution(k, d) {
    let answer = 0;

    for (let x = 0; x <= d; x += k) { 
        const max = Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2)))
        answer += Math.floor(max / k) + 1
    }
    return answer;
}