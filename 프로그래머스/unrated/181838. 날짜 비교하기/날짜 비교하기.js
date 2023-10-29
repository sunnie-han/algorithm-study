function solution(date1, date2) {
    const compare = ([y1, m1, d1], [y2, m2, d2]) => {
        if (y1 > y2) {
            return 0;
        }
        if (y1 < y2) {
            return 1;
        }
        if (m1 > m2) {
            return 0;
        }
        if (m1 < m2) {
            return 1;
        }
        if (d1 >= d2) {
            return 0;
        }
        return 1;
    }
    return compare(date1, date2);
}