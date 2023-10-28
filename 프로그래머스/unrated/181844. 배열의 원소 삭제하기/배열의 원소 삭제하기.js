function solution(arr, delete_list) {
    return arr.filter(val => !delete_list.includes(val));
}