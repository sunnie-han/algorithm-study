function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx++) {
        const cur = code[idx];
        if (cur !== '1') {
             if (idx % 2 === mode) {
                 ret += cur;
             }
         } else {
             mode = mode === 0 ? 1 : 0;
         }
    }
    return ret === '' ? 'EMPTY' : ret;
}