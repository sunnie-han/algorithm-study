function solution(arr) {
    const binary = arr.length.toString(2);
    const digit = binary.slice(1).split('').every(val => val === '0') ? binary.length - 1 : binary.length;
    return [...arr, ...Array(2 ** digit - arr.length).fill(0)];
}