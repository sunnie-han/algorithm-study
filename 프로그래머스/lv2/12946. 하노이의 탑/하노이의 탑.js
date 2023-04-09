const hanoi = (answer, n, from, to, another) => {
    if (n === 1) {
        answer.push([from, to])
        return
    }
    
    hanoi(answer, n-1, from, another, to)
    answer.push([from, to])
    hanoi(answer, n-1, another, to, from)
}

function solution(n) {
    let answer = []
    hanoi(answer, n, 1, 3, 2)
    return answer
}