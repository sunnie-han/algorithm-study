function solution(arr) {
    const [c, r] = [arr[0].length, arr.length];
    return c < r ? arr.map(val => [...val, ...Array(r - val.length).fill(0)]) : [...arr, ...Array(c-r).fill(Array(c).fill(0))];
}