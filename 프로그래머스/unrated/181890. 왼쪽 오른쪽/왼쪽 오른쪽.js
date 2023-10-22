function solution(str_list) {
    const leftIndex = str_list.findIndex(val => val === 'l');
    const rightIndex = str_list.findIndex(val => val === 'r');
    if (leftIndex < 0 && rightIndex < 0) {
        return [];
    }
    const left = str_list.slice(0, leftIndex);
    const right = str_list.slice(rightIndex + 1);
    
    if (leftIndex  < 0) {
        return right;
    }
    
    if (rightIndex < 0) {
        return left;
    }
    
    const isLeft = leftIndex < rightIndex;
    return isLeft ? left : right;
}