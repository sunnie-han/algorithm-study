const divmod = (a, b) => {
    return [Math.floor(a / b), a % b]
}

function solution(n, left, right) {
    const result = []
    for (let i = left; i <= right; i++) {
        const [r, c] = divmod(i, n)
        if (r < c) {
            result.push(c + 1)
        } else {
            result.push(r + 1)
        }
    }
    return result
}