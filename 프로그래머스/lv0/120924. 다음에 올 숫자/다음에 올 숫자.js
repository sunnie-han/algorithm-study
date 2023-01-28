function solution(common) {
    let answer = 0;
    const first = common[0];
    const second = common[1];
    const third = common[2];
    
    const gap1 = second - first;
    const gap2 = third - second;
    
    const lastElement = common.pop()
    
    if (gap1 === gap2) {
        answer = lastElement + gap1
    } else {
        answer = lastElement * (second / first)
    }
    
    return answer;
}