function solution(data, col, row_begin, row_end) {
    const colIndex = col - 1
    const sortDataByKey = data.sort((a, b) => b[0] - a[0])
    const sortDataByCol = sortDataByKey.sort((a, b) => a[colIndex] - b[colIndex])
    let answer = 0
    for (let i = row_begin; i <= row_end; i++) {
        const s = data[i - 1].reduce((sum, cur) => sum + cur % i, 0)
        answer = xor(answer, s)
    }
    
    return answer
}

const xor = (a, b) => {
    let answer = 0
    
    let bitA = 0
    let bitB = 0
    
    let exponent = 0
    
    while (!(a === 0 && b === 0)) {
        bitA = a % 2
        bitB = b % 2
        if (bitA != bitB) {
            answer += Math.pow(2, exponent)
        }
        exponent++
        a = Math.floor(a / 2)
        b = Math.floor(b / 2)
    }
    
    return answer
}