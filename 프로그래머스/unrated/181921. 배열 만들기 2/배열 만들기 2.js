function solution(l, r) {
    const max = Math.floor(Math.log10(r)) + 1;
    let temp = 0;
    let tempArr = [0];
    
    while (temp < max) {
        const cur = 10 ** temp;
        tempArr = [...tempArr, ...tempArr.map(val => val + cur)];
        temp += 1;
    }
    
    const answer = tempArr
        .map(val => 5 * val)
        .filter(val => l <= val && val <= r)
        .sort((a, b) => a - b);
    
    return answer.length > 0 ? answer : [-1];
}