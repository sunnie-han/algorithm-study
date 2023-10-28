function solution(arr, flag) {
    const x = [];
    for (let i=0; i<flag.length; i++) {
        const val = arr[i];
        if (flag[i]) {
            x.push(...Array(2 * val).fill(val));
        } else {
            x.splice(-val)
        }
    }
    return x;
}