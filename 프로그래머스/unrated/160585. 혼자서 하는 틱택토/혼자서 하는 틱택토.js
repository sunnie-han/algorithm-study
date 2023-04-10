const completedCount = (lineBoard) => {
    let countOfO = 0
    let countOfX = 0
    const rules = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    for (rule of rules) {
        const [a, b, c] = rule
        if (lineBoard[a] === lineBoard[b] && lineBoard[a] === lineBoard[c]) {
            if (lineBoard[a] === 'O') countOfO++
            if (lineBoard[a] === 'X') countOfX++
        }
    }
    return {o: countOfO, x: countOfX}
}
function solution(board) {
    const lineOfBoard = board.reduce((prev, cur) => prev.concat(cur.split("")), [])
    const countOfO = lineOfBoard.filter(val => val === 'O').length
    const countOfX = lineOfBoard.filter(val => val === 'X').length
    
    const diff = countOfO - countOfX
    if (diff !== 0 && diff !== 1) return 0
    
    const {o, x} = completedCount(lineOfBoard)
    if (diff === 0 && o !== 0) return 0
    if (diff === 1 && x !== 0) return 0
    if (o === 2 && x === 1) return 0
    
    return 1
}