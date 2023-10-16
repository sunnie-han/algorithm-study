function solution(arr, intervals) {
    return intervals.reduce((acc, [s, e]) => [...acc, ...arr.slice(s, e+1)], []);
}