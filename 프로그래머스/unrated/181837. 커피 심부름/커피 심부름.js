function solution(order) {
    return order.reduce((acc, cur) => {
        if (cur.includes('latte')) {
            return acc + 5000;
        }
        return acc + 4500;
    }, 0);
}