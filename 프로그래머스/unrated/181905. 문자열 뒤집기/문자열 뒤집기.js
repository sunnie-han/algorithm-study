function solution(my_string, s, e) {
    const arr = my_string.split("");
    arr.splice(s, e - s + 1, ...arr.slice(s, e + 1).reverse());
    return arr.join("");
}