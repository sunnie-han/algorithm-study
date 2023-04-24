function solution(elements) {
    let answer = 0
    const sums = new Set([])
    const maxLength = elements.length
    const dp = Array(maxLength).fill(0)
    for (let length = 1; length < maxLength + 1; length++) {
        for (let i = 0; i < maxLength; i++) {
            const addIndex = (i + length - 1) % maxLength
            const sum = dp[i] + elements[addIndex]
            if (!sums.has(sum)) {
                answer++
                sums.add(sum)
            }
            dp[i] = sum
        }
    }
    return answer
}