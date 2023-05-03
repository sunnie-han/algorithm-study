function solution(cards) {
    const length = cards.length
    const visited = Array(length).fill(0)
    const temp = []
    for (let i = 0; i < length; i++) {
        if (visited[i] === 1) continue
        
        let cardIndex = cards[i] - 1
        visited[i] = 1
        let count = 1
        while (visited[cardIndex] === 0) {
            visited[cardIndex] = 1
            cardIndex = cards[cardIndex] - 1
            count++
        }
        temp.push(count)
    }
    const [a, b, ...rest] = temp.sort((a, b) => b - a)
    return b ? a * b : 0
}