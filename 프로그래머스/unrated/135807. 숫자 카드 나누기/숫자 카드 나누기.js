const getMaxDivisor = (array) => {
    const elements = array.sort((a, b) => a - b)
    for (let i = elements[0]; i > 1; i--) {
        let count = 0
        for (el of elements) {
            if (el % i != 0) break
            count ++
        }
        if (count === elements.length) return i
    }
    return 1
}

function solution(arrayA, arrayB) {
    const maxA = getMaxDivisor(arrayA)
    const maxB = getMaxDivisor(arrayB)
    
    const divideAbyB = arrayA.map(val => val % maxB).filter(val => val != 0)
    const divideBbyA = arrayB.map(val => val % maxA).filter(val => val != 0)
    
    const caseA = divideAbyB.length === arrayA.length
    const caseB = divideBbyA.length === arrayB.length
    
    if (caseA && caseB) {
        return maxA > maxB ? maxA : maxB
    } else if (caseA) {
        return maxB
    } else if (caseB) {
        return maxA
    }
    return 0
}
