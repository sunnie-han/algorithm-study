function solution(n, control) {
    let answer = n;
    for (const cur of control) {
        switch (cur) {
            case 'w':
                answer += 1;
                continue;
            case 's':
                answer -= 1;
                continue;
            case 'd':
                answer += 10;
                continue;
            case 'a':
                answer -= 10;
                continue;
        }
    }
    return answer;
}