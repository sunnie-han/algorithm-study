function solution(intStrs, k, s, l) {
    return intStrs.map(str => Number(str.slice(s, s + l))).filter(val => val > k);
}