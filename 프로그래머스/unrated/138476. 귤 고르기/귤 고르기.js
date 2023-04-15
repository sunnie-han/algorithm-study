function solution(k, tangerines) {
    const table = {}
    for (let tangerine of tangerines) {
        if (table[tangerine]) {
            table[tangerine]++
        } else {
            table[tangerine] = 1
        }
    }
    const sortedTable = Object.entries(table).sort((a, b) => b[1] - a[1])
    let temp = 0
    let answer = 0
    for (let row of sortedTable) {
        const [_, count] = row
        if (temp >= k) {
            return answer
        }
        temp += count
        answer++
    }
    return answer--
}