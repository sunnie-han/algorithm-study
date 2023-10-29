function solution(n) {
    const answer = Array.from({length: n}, () => Array.from({length: n}, () => 0));
    let [num, [i, j], direction] = [1, [0, 0], 'r'];
    
    while (true){
        answer[i][j] = num;
        num += 1;
        if (num > n ** 2) {
            break;
        }
        
        switch (direction) {
            case 'r':
                j += 1;
                if (answer[i][j] > 0) {
                    direction = 'd';
                    j -= 1;
                    num -= 1;
                }
                if (j === n - 1) {
                    direction = 'd';
                }
                break;
            case 'l':
                j -= 1;
                if (answer[i][j] > 0) {
                    direction = 'u';
                    j += 1;
                    num -= 1;
                }
                if (j === 0) {
                    direction = 'u';
                }
                break;
            case 'u':
                i -= 1;
                if (answer[i][j] > 0) {
                    direction = 'r';
                    i += 1;
                    num -= 1;
                }
                if (i === 0) {
                    direction = 'r';
                }
                break;
            case 'd':
                i += 1;
                if (answer[i][j] > 0) {
                    direction = 'l';
                    i -= 1;
                    num -= 1;
                }
                if (i === n - 1) {
                    direction = 'l';
                }
                break;
        }
    }
    
    return answer;
}