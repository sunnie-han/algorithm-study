function solution(num_list) {
    const newNum = num_list.at(-1) > num_list.at(-2) ?
          num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2;
    
    return [...num_list, newNum];
}