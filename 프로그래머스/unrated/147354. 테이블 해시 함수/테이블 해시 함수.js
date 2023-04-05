function solution(data, col, row_begin, row_end) {
    const colIndex = col - 1
    data.sort((a, b) => a[colIndex] - b[colIndex] || b[0] - a[0])
    let answer = 0
    for (let i = row_begin; i <= row_end; i++) {
        const s = data[i - 1].reduce((sum, cur) => sum + cur % i, 0)
        answer ^= s
    }
    
    return answer
}
