function solution(strArr) {
    const note = Array(31).fill(0);
    strArr.forEach(str => {
        note[str.length] += 1;
    });
    return Math.max(...note);
}