function solution(myString, pat) {
    return myString.split('').map(val => val === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}