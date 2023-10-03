function solution(n) {
    const note = Array(n+1).fill(true);
    let num = 0;
    while (num < n+1) {
        if (num === 0 || num === 1) {
            note[num] = false;
        }
        if (note[num]) {
            let i = 2;
            while (num * i < n+1) {
                note[num * i] = false;
                i += 1;
            }
        }
        num += 1;
    }
    return note.filter(val => val === true).length;
}