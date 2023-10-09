function solution(num_list) {
    const [even, odd] = num_list.reduce((acc, cur, idx) => {
        const [even, odd] = acc;
        if ((idx + 1) % 2 === 0) {
            return [even + cur, odd];
        }
        return [even, odd + cur];
    }, [0, 0])
    return Math.max(even, odd);
}