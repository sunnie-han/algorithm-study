function solution(arr, idx) {
    for (const arrIdx in arr) {
        if (arrIdx < idx) {
            continue;
        }
        if (arr[arrIdx] === 1) {
            return Number(arrIdx);
        }
    }
    return -1;
}