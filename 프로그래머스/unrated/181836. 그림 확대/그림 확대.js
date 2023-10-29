function solution(picture, k) {
    return picture.map((val) => {
        return Array(k).fill(val.split('').map(char => char.repeat(k)).join(''))
    }).flat();
}