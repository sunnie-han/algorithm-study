function solution(my_string) {
    return Array.from({length: my_string.length}, (x, i) => i+1).map(n => my_string.slice(-1 * n)).sort();
}