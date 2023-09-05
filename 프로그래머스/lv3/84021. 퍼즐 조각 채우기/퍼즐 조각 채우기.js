const getNextPositions = (x, y, board) => {
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    const result = [];
    const isInBoard = (target) => {
        return 0 <= target && target < board.length;
    }
    
    for (let i=0; i<4; i++){
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (isInBoard(nx) && isInBoard(ny)) {
            result.push([nx,ny]);
        }
    }
    return result;
}

const visitedMark = -1;

const sortArr = (a, b) => a[1] - b[1] || a[0] - b[0];

const convertToRelativePos = (coords) => {
    const convertedCoords = [];

    const _coords = [...coords];
    const minCoord = [Math.min(..._coords.map(coord => coord[0])), Math.min(..._coords.map(coord => coord[1]))];
    
    const maxCoord = [Math.max(..._coords.map(coord => coord[0])), Math.max(..._coords.map(coord => coord[1]))];

    for (const coord of _coords) {
        const [min_x, min_y] = minCoord;
        
        const [cx, cy] = coord;

        convertedCoords.push([cx-min_x, cy-min_y]);
    }
    convertedCoords.sort(sortArr);
    return convertedCoords;
}

const getArea = (board, targetMark, startPoint) => {
    const [x, y] = startPoint;
    const target = [];
    
    const q = [[x,y]];
    while (q.length > 0) {
        const [tx, ty] = q.shift();
        if (board[tx][ty] === visitedMark) {
            continue;
        }
        
        target.push([tx, ty]);
        board[tx][ty] = visitedMark;
        
        for (const pos of getNextPositions(tx, ty, board)) {
            const [nx, ny] = pos;
            if (board[nx][ny] !== targetMark) {
                continue;
            }
            q.push(pos);
        }
    }
    return convertToRelativePos(target);
}

const getAreas = (board, targetMark) => {
    const result = [];

    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board.length; j++) {
            if (board[i][j] === visitedMark) {
                continue;
            }
            const q = [[i,j]];
            while (q.length > 0) {
                const [x, y] = q.shift();
                if (board[x][y] === visitedMark) {
                    continue;
                }

                if (board[x][y] === targetMark) {
                    const area = getArea(board, targetMark, [x, y]);
                    result.push(area);
                } else {
                    board[x][y] = visitedMark;
                    for (const pos of getNextPositions(x, y, board)) {
                        const [nx, ny] = pos;
                        if (board[nx][ny] === visitedMark) {
                            continue;
                        }
                        q.push(pos);
                    }
                }
            }
        }
    }
    
    return result;
}

const isPossible = (puzzle, blank) => {
    const isSameArr = (arr_1, arr_2) => {
        const _arr_1 = [...arr_1];
        const _arr_2 = [...arr_2];
        _arr_1.sort(sortArr);
        _arr_2.sort(sortArr);
        
        return _arr_1.toString() === _arr_2.toString();
    }
    
    let _puzzle = [...puzzle];
    
    for (let i=0; i<4; i++) {
        if (isSameArr(blank, _puzzle)) {
            return true;
        }
        const [cx, cy] = _puzzle[0];
        const rotatedPuzzle = [..._puzzle].map(([x, y]) => [cx-(cy-y), cy+(cx-x)]);

        _puzzle = convertToRelativePos(rotatedPuzzle);
    }
    return false;
}

function solution(game_board, table) {
    const blanks = getAreas(game_board, 0);
    
    const puzzles = getAreas(table, 1);
    const isPuzzleUsed = Array(puzzles.length).fill(0);
    
    let answer = 0;

    for (const blank of blanks) {
        for (let index=0; index < puzzles.length; index++) {
            const puzzle = puzzles[index];
            if (isPuzzleUsed[index] === 1) {
                continue;
            }
            if (puzzle.length !== blank.length) {
                continue;
            }
            
            if (isPossible(puzzle, blank)) {
                isPuzzleUsed[index] = 1;
                answer += blank.length;
                break;
            } 
        }
    }
    
    return answer;
}