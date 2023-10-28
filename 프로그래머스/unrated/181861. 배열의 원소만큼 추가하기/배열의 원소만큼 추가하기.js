function solution(arr) {
    return arr.map(val => Array(val).fill(val)).flat();
}