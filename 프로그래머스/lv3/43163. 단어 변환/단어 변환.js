const isConvertable = (a, b) => {
    let diffCount = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i] === b[i]) {
            continue;
        }
        diffCount++;
    }
    if (diffCount === 1) {
        return true;
    } else {
        return false;
    }
}
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    const check = Array(words.length).fill(0);
    const q = [[begin, 0]];
    let answer = 0;
    while (q.length > 0) {
        const [current, count] = q.shift();
        console.log(current, count)
        for (let i=0; i<words.length; i++) {
            const next = words[i];
            const nextCount = count + 1;
            if (check[i] !== 0 && nextCount > check[i]) {
                continue;
            }
            if (isConvertable(current, next)) {
                if (next === target) {
                    return nextCount;
                }
                check[i] = nextCount;
                q.push([next, nextCount]);
            }
        }
    }
    
    
    return 0;
}