function solution(numbers) {
    const strings = numbers.map(number => number.toString())
    strings.sort((a, b) => (b + a) - (a + b))
    const answer = strings.join('')
    return answer[0] === '0'? '0' : answer
}