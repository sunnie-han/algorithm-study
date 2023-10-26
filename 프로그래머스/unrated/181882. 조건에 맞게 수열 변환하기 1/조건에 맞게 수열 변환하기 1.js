function solution(arr) {
    return arr.map(val => {
        if (val >= 50 && val % 2 === 0) {
            return val / 2;
        }
        if (val < 50 && val % 2 === 1) {
            return val * 2;
        }
        return val;
    });
}