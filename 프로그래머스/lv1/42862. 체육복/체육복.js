function solution(n, lost, reserve) {
    const note = Array(n+2).fill(0);
    
    lost.forEach((student) => {
        note[student] -= 1;
    });
    reserve.forEach((student) => {
        note[student] += 1;
    });
    
    let answer = n;
    
    for (let student = 1; student < n+1; student++) {
        const cur = note[student];
        if (cur < 0) {
            const hasBefore = note[student - 1] > 0;
            if (hasBefore) {
                continue;
            }
            const hasNext = note[student + 1] > 0;
            if (hasNext) {
                note[student + 1] -= 1;
                continue;
            }
            answer -= 1;
        }
    }
    return answer;
}