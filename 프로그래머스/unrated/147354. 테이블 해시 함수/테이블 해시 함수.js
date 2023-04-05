function solution(data, col, row_begin, row_end) {
    const colIndex = col - 1
    const sortDataByKey = data.sort((a, b) => b[0] - a[0])
    const sortDataByCol = sortDataByKey.sort((a, b) => a[colIndex] - b[colIndex])
    let answer = 0
    for (let i = row_begin; i <= row_end; i++) {
        const s = data[i - 1].reduce((sum, cur) => sum + cur % i, 0)
        answer ^= s
    }
    
    return answer
}
