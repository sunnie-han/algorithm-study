function solution(board) {
    const yLength = board.length
    const xLength = board[0].length
    
    const move = (direction, position) => {
        const [dx, dy] = direction
        const [x, y] = position
        let nx = x
        let ny = y
        while (0 <= nx && nx < xLength && 0 <= ny && ny < yLength) {
            if (board[ny][nx] === 'D') break
            nx += dx
            ny += dy
        }
        const justBefore = [nx - dx, ny - dy]
        return justBefore
    }
    
    const danger = new Set()
    let robot
    let goal
    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            if (board[y][x] === 'D') danger.add([x, y])
            if (board[y][x] === 'R') robot = [x, y]
            if (board[y][x] === 'G') goal = [x, y]
        }
    }
    
    const dp = Array.from(Array(yLength), () => Array(xLength).fill(-1))
    dp[robot[1]][robot[0]] = 0
    const q = [robot]

    let cur
    while (cur = q.shift()) {
        if (cur === goal) break
        const [x, y] = cur
        const newCount = dp[y][x] + 1
        for (let direction of [[0, 1], [0, -1], [1, 0], [-1,0]]) {
            const [nx, ny] = move(direction, cur)
            const currentCount = dp[ny][nx]
            if (currentCount === -1 || currentCount > newCount) {
                dp[ny][nx] = newCount
                q.push([nx, ny])
            }
        }
    }
    return dp[goal[1]][goal[0]]
}