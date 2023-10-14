const alphabetNum = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
const getIdx = (char) => {
    const isLowerCase = char.toLowerCase() === char;
    if (isLowerCase) {
        return alphabetNum + char.charCodeAt() - 'a'.charCodeAt();
    }
    return char.charCodeAt() - 'A'.charCodeAt();
}
function solution(my_string) {
    const answer = Array.from({length: 2 * alphabetNum}, () => 0);
    my_string.split("").forEach(val => {
        answer[getIdx(val)] += 1;
    })
    return answer;
}