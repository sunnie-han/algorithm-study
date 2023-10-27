function solution(myString, pat) {
    const idx = myString.split("").reverse().join("").search(pat.split("").reverse().join(""));
    return myString.substring(0, myString.length - idx);
}