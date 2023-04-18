function solution(arr1, arr2) {
    const lenInner = arr2[0].length
    const lenMid = arr1[0].length
    const lenOuter = arr1.length
    
    const answer = []
    for (let i = 0; i < lenOuter; i++) {
        const temp = []
        let result = 0
        for (let j = 0; j < lenInner; j++) {
            const target1 = arr1[i]
            const target2 = arr2.map(val => val[j])
            for (let k = 0; k < lenMid; k++) {
                result += target1[k] * target2[k]
            }
            temp.push(result)
            result = 0
        }
        answer.push(temp)
    }
    return answer
}