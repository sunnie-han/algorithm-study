function solution(str_list, ex) {
    return str_list.filter(val => val.includes(ex) ? "" : val).join('');
}