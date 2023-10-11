function solution(...inputs) {
    const map = {};
    inputs.forEach(input => {
        if (Object.keys(map).includes(String(input))) {
            map[input] += 1;
        } else {
            map[input] = 1;
        }
    });
    
    const sortedListOfMap = Object.entries(map).sort((a, b) => b[1] - a[1]);
    const p = Number(sortedListOfMap[0][0]);
    if (sortedListOfMap.length === 1) {
        return 1111 * p;
    }
    const q = Number(sortedListOfMap[1][0]);
    if (sortedListOfMap.length === 2) {
        if (sortedListOfMap[0][1] === 3) {
            return (10 * p + q) ** 2;
        } else {
            return (p + q) * Math.abs(p - q);
        }
    }
    if (sortedListOfMap.length === 3) {
        const r = Number(sortedListOfMap[2][0]);
        return q * r;
    }
    return Math.min(...inputs);
}