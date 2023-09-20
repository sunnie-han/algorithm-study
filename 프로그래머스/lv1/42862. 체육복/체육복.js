function solution(n, lost, reserve) {
    const note = Array(n+1).fill(1);
    note[0] = 0;
    lost.forEach((student) => {
        note[student] -= 1;
    });
    reserve.forEach((student) => {
        note[student] += 1;
    });
    console.log(note)
}