function solution(q, r, code) {
    return code.split("").map((val, idx) => idx % q === r ? val : "").join("");
}