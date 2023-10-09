function solution(num_list, n) {
    return num_list.some(val => val === n) ? 1 : 0;
}