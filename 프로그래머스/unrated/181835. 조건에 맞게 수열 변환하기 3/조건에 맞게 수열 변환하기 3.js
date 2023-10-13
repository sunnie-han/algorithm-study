function solution(arr, k) {
    return k % 2 === 1 ? arr.map(val => k * val) : arr.map(val => k + val);
}