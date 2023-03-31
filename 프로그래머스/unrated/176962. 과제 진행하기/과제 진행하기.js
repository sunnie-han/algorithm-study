const toMin = (time) => {
    let [h, m] = time.split(":")
    return Number(h) * 60 + Number(m)
}

function solution(plans) {
    var answer = []
    plans.sort((a, b) => toMin(a[1]) - toMin(b[1]))
    
    let pendingPlanStack = []
    
    while (plans.length > 1) {
        let [currentName, currentStart, currentPlaytime] = plans.shift()
        let [nextName, nextStart, nextPlaytime] = plans[0]
        
        let currentEndTime = toMin(currentStart) + Number(currentPlaytime)
        let restTime = toMin(nextStart) - currentEndTime
        
        if (restTime > 0) {
            answer.push(currentName)
            while (restTime > 0 && pendingPlanStack.length > 0) {
                let [name, time] = pendingPlanStack.pop()
                if (restTime - time >= 0) {
                    answer.push(name)
                } else {
                    pendingPlanStack.push([name, time - restTime])
                }
                restTime -= time
            }
        } else if (restTime === 0) {
            answer.push(currentName)
        } else {
            pendingPlanStack.push([currentName, -restTime])
        }
    }
    
    answer.push(plans[0][0])
    
    while (pendingPlanStack.length > 0) {
        let [name, _] = pendingPlanStack.pop()
        answer.push(name)
    }
    
    return answer
}