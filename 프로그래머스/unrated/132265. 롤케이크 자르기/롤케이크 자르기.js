function solution(topping) {
    let answer = 0
    const right = initialCake(topping)
    const left = new Map()
    
    for (t of topping) {
        if (right.has(t)) {
            const before = right.get(t)
            if (before === 1) right.delete(t)
            else right.set(t, before - 1)
        }
        if (left.has(t)) {
            const before = left.get(t)
            left.set(t, before + 1)
        } else left.set(t, 1)
        if (right.size === left.size) answer++
    }
    
    return answer
}

const initialCake = (topping) => {
    const cake = new Map()
    for (t of topping) {
        if (cake.has(t)) {
            const before = cake.get(t)
            cake.set(t, before + 1)
        } else {
            cake.set(t, 1)
        }
    }
    return cake
}