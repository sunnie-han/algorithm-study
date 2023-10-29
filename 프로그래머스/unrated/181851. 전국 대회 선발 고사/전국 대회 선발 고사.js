function solution(rank, attendance) {
    const note = [];
    rank.forEach((r, i) => {
        if (attendance[i]) {
            note.push({rank: r, number: i});
        }
    });
    note.sort((a, b) => a.rank - b.rank);
    const [a, b, c] = note;
    
    return 10000 * a.number + 100 * b.number + c.number;
}