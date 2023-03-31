function solution(maps) {
    var answer = []
    let lenX = maps[0].length 
    let lenY = maps.length
    
    let islands = []
    for (let i = 0; i < lenY; i++) {
        for (let j = 0; j < lenX; j++) {
            if (maps[i][j] !== 'X') {
                islands.push([i, j])
            }
        }
    }
    
    let visited = Array.from(Array(lenY), () => Array(lenX).fill(0));

    for (island of islands) {
        let [y, x] = island
        if (visited[y][x] === 1) continue
            
        let foods = 0
        let q = [island]
        let now
        while (now = q.shift()) {
            let [y, x] = now
            if (visited[y][x] === 1) continue
            
            visited[y][x] = 1
            
            if (maps[y][x] === 'X') continue
            foods += Number(maps[y][x])
            
            const dist = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for ([dx, dy] of dist) {
                let newX = x + dx
                let newY = y + dy
                let next = [newY, newX]
                if (0 <= newX && newX < lenX && 0 <= newY && newY < lenY) {
                    if (visited[newY][newX] === 0) q.push(next)
                }
            }
        }
        answer = [...answer, foods]
    }
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}