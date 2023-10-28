function solution(myStr) {
    const result = myStr.split(/[abc]/g).filter(val => val !== '');
    return result.length > 0 ? result : ['EMPTY'];
}