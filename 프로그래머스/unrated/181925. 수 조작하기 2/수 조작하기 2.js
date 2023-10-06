const getOperation = (before, after) => {
    const diff = after - before;
    switch (diff) {
        case 1:
            return 'w';
        case -1:
            return 's';
        case 10:
            return 'd';
        case -10:
            return 'a';
    }
}
function solution(numLog) {
    let answer = '';
    for (let idx = 1; idx < numLog.length; idx++) {
        const before = numLog[idx - 1];
        const after = numLog[idx];
        answer += getOperation(before, after);
    }
    return answer;
}