function solution(board, k) {
    let answer = 0;
    
    const max_i = board.length;
    const max_j = board[0].length;
    
    for (let i=0; i < max_i; i++) {
        if (i > k) {
            break;
        }
        for (let j=0; j < max_j; j++) {
            if (i + j <= k) {
                answer += board[i][j];
            }
            continue;
        }
    }
    return answer;
}