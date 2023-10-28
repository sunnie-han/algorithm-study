function solution(myString) {
    return myString.split('').map(val => val.charCodeAt(0) < 'l'.charCodeAt(0) ? 'l' : val).join('');
}