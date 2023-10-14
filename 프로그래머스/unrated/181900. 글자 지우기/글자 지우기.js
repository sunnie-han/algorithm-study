function solution(my_string, indices) {
    return my_string.split("").map((val, idx) => indices.includes(idx) ? "" : val).join("");
}