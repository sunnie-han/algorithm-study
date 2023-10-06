function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const temp = arr.slice(s, e + 1).filter(val => k < val);
        const result = Math.min(...temp);
        
        return result === Infinity ? -1 : result;
    })
}