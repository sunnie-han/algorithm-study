function solution(sequence, k) {
    const length = sequence.length

    let minLength = length
    let answer = []
    let endIndex = length - 1
    let currentSum = 0
    
    for (let i = length - 1; i >= 0; i--) {
        currentSum += sequence[i]
        if (currentSum > k) {
            let lastIndex = endIndex
            while (lastIndex > i) {
                currentSum -= sequence[lastIndex]
                lastIndex--
                if (currentSum < k) break
            }
            endIndex = lastIndex
        }
        if (currentSum === k) {
            const curLength = endIndex - i + 1
            if (minLength >= curLength) {
                answer = [i, endIndex]
                minLength = curLength
            }
        }
    }
    
    
    return answer
}