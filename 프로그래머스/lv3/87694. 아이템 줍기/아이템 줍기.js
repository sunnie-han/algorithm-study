const getMarkedMap = (originalMap, mark, minX, minY, maxX, maxY) => {
    const _map = [...originalMap.map(innerArr => innerArr.slice())];
    for(let x = minX; x <= maxX; x++) {
        for(let y = minY; y <= maxY; y++) {
            _map[x][y] = mark;
        }
    }
    return _map;
}
const createEdgeMap = (rectangles) => {
    let edgeMap = Array.from(Array(52 * 2), () => Array(52 * 2).fill(false));
    for (const rectangle of rectangles) {
        const [lbx, lby, rtx, rty] = rectangle;
        edgeMap = getMarkedMap(edgeMap, true, lbx * 2, lby *  2, rtx * 2, rty * 2);
    }
    for (const rectangle of rectangles) {
        const [lbx, lby, rtx, rty] = rectangle;
        edgeMap = getMarkedMap(edgeMap, false, lbx * 2 + 1, lby * 2 + 1, rtx * 2 - 1, rty * 2 - 1);
    }
    return edgeMap;
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const edgeMap = createEdgeMap(rectangle);
    
    // [x, y, count]
    const q = [[characterX * 2, characterY * 2, 0]];
    edgeMap[characterX * 2][characterY * 2] = false;
    
    while (q.length > 0) {
        const [x, y, count] = q.shift();
        
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];
        
        for (let i=0; i<4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (edgeMap[nx][ny] === false) {
                continue;
            }
            if (nx === itemX * 2 && ny === itemY * 2) {
                return count + 0.5;
            }
            edgeMap[nx][ny] = false;
            q.push([nx, ny, count + 0.5]);
        }
    }
    
    // 도달 불가
    return 0;
}