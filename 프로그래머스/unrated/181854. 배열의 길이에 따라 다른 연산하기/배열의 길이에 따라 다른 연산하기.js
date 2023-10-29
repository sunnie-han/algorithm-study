function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((val, idx) => idx % 2 === 1 ? val + n : val) : arr.map((val, idx) => idx % 2 === 0 ? val + n : val);
}