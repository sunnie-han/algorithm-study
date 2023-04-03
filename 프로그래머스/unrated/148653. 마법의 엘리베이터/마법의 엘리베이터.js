const upOrDown = (num, next) => {
    if (num === 5) {
        if (next >= 5) {
            return {ceil: 1, count: 10 - num}
        }
        return {ceil: 0, count: num}
    } else if (num > 5) {
        return {ceil: 1, count: 10 - num}
    }
    return {ceil: 0, count: num}
}

function solution(storey) {
    let answer = 0;
    
    while (storey) {
        const current = storey % 10
        storey = Math.floor(storey/10)
        const next = storey % 10
        const {ceil, count} = upOrDown(current, next)
        answer += count
        storey += ceil
    }
    
    return answer;
}