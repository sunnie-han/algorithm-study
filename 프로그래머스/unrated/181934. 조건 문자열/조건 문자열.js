function solution(ineq, eq, n, m) {
    const compareResult = ineq === '>' ? n > m : n < m;
    const compareEqual = eq === '=' ? n === m : false;
    return compareResult || compareEqual ? 1 : 0;
}