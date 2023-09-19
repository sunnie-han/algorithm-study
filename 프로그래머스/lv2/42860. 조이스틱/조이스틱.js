const alphabetToValue = (char) => char.toLowerCase().charCodeAt(0) - 97;

function solution(name) {
    let answer = 0;
    
    let move_lr_min = name.length - 1;
    
    const pos = name.split('').forEach((char, leftIndex) => {
        const v = alphabetToValue(char);
        const move_ud_min = Math.min(v, 26 - v);
        answer += move_ud_min;
        
        let rightIndex = leftIndex + 1;
        while (rightIndex < name.length && name[rightIndex] === 'A') {
            rightIndex += 1;
        }        
    
        move_lr_min = Math.min(move_lr_min, 2 * leftIndex + name.length - rightIndex, leftIndex + 2 * (name.length - rightIndex));
    
    });
    
    return answer + move_lr_min;
}