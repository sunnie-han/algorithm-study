function solution(my_string, is_suffix) {
    return my_string.slice(-1 * is_suffix.length) === is_suffix? 1: 0;
}