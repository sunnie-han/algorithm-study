function solution(numbers) {
    const length = numbers.length
    const answer = Array(length).fill(-1)
    const indexStack = []
    
    for (let i = 0; i < length; i++) {
        const current = numbers[i]
        
        while (indexStack && numbers[indexStack[indexStack.length - 1]] < current) {
            answer[indexStack.pop()] = current
        }
        indexStack.push(i)
    }
    return answer
}