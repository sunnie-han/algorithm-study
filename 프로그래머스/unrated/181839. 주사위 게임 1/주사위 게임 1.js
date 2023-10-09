function solution(a, b) {
    const isAEven = a % 2 === 0;
    const isBEven = b % 2 === 0;
    
    if (!isAEven && !isBEven) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    }
    if (isAEven && isBEven) {
        return Math.abs(a - b);
    }
    return 2 * (a + b);
}