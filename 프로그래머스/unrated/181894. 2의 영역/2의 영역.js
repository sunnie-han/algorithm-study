function solution(arr) {
    let s = null;
    let e = null;
    arr.forEach((el, idx) => {
        if (el === 2) {
            if (s == null) {
                s = idx;
            }
            e = idx;
        }
    })
    return s === null? [-1] : arr.slice(s, e + 1);
}