function solution(num_list) {
    let odd = '';
    let even = '';
    
    for (const num of num_list) {
        if (num % 2 === 0) {
            even += String(num);
        } else {
            odd += String(num);
        }
    }
    return Number(odd) + Number(even);
}