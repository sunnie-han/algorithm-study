function solution(arr) {
    const calc = (val) => {
        if (val >= 50 && val % 2 === 0) {
            return val / 2;
        }
        if (val < 50 && val % 2 === 1) {
            return val * 2 + 1;
        }
        return val;
    }
    
    let answer = 0;
    let arrX = [...arr];
    
    while (true) {
        let isEqual = true;
        const arrN = [];
        
        for (const val of arrX) {
            const newValue = calc(val);
            arrN.push(newValue);
            if (isEqual) {
                isEqual = val === newValue;
            }
        }
        if (isEqual) {
            return answer;
        }
        arrX = arrN;
        answer += 1;
    }
    
    return answer;
}