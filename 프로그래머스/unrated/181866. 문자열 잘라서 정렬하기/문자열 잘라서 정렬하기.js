function solution(myString) {
    return myString.split('x').filter(val => val !== '').sort();
}