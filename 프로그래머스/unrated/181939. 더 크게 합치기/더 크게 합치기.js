function solution(a, b) {
    const ab = Number(String(a)+String(b));
    const ba = Number(String(b)+String(a));
    
    return ba > ab ? ba : ab;
}