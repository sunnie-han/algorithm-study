function solution(orders) {
    let answer = 0
    let conveyorOrder = 1
    const subConveyor = []
    for (const order of orders) {
        const isInSubConveyor = order === subConveyor[subConveyor.length - 1]
        if (isInSubConveyor) {
            subConveyor.pop()
            answer++
        } else {
            while (conveyorOrder < order) {
                subConveyor.push(conveyorOrder)
                conveyorOrder++
            }
            if (conveyorOrder === order) {
                answer++
                conveyorOrder++
            } else {
                break
            }
        }
    }
    return answer
}
