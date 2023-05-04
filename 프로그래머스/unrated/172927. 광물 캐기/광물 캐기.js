function solution(picks, minerals) {
    const getCost = (minerals) => {
        const costMap = {'diamond': 25, 'iron': 5, 'stone': 1}
        let cost = 0
        
        for (const m of minerals) {
            cost += costMap[m]
        }
        return [cost, minerals]
    }
    
    const mineralGroups = []
    const totalTools = picks[0] + picks[1] + picks[2]
    for (let i = 0; i < minerals.length; i += 5) {
        if (mineralGroups.length === totalTools) break
        const curGroup = minerals.slice(i, i + 5)
        mineralGroups.push(getCost(curGroup))
    }
    mineralGroups.sort((a, b) => b[0] - a[0])
    
    const index = {'diamond': 0, 'iron': 1, 'stone': 2}
    const fatigue = [[1, 1, 1], [5, 1, 1], [25, 5, 1]]
    
    const getTool = () => {
        if (picks[0] > 0) {
            picks[0] -= 1
            return 'diamond'
        } else if (picks[1] > 0) {
            picks[1] -= 1
            return 'iron'
        } else if (picks[2] > 0) {
            picks[2] -= 1
            return 'stone'
        }
    }
    
    let answer = 0
    for (const [_, ms] of mineralGroups) {
        const t = getTool()
        console.log(t, ms)
        for (const m of ms) {
            answer += fatigue[index[t]][index[m]]
        }
    }
    return answer
}