function solution(arr, k) {
    const unique = arr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            return [...acc, cur];
        }
        return acc;
    }, []).slice(0, k);
    return unique.length === k ? unique : [...unique, ...Array(k - unique.length).fill(-1)];
}