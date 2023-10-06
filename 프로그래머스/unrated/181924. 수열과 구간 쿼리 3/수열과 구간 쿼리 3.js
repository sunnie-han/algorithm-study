function solution(arr, queries) {
    let temp = [...arr];
    for (const query of queries) {
        const [i, j] = query;
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
}