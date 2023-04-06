function solution(sequence, k) {
    const length = sequence.length
    let answer = [0, length]
    let left = 0
    let right = 0
    let sum = sequence[left]
    
    while (right < length) {
        if (sum < k) {
            right++
            sum += sequence[right]
        } else if (sum > k) {
            sum -= sequence[left]
            left++
        } else {
            const minDist = answer[1] - answer[0]
            const currentDist = right - left
            if (currentDist < minDist) {
                answer = [left, right]
            }
            sum -= sequence[left]
            left++
        }
    }
    
    return answer
}