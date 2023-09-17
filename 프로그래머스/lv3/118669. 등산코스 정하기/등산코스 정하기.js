function solution(n, paths, gates, summits) {
    const map = {};
    for (const [i, j, w] of paths) {
        if (map[i]) {
            map[i].push([j, w]);
        } else {
            map[i] = [[j, w]];
        }
        if (map[j]) {
            map[j].push([i, w]);
        } else {
            map[j] = [[i, w]];
        }
    }
    const maxValue = 10000001;
    const dist = Array(n+1).fill(maxValue);
    
    const q = [];
    for (const gate of gates) {
        q.push({intensity: 0, pos: gate});
    }
    
    let answer = [50001, maxValue];
    while (q.length > 0) {
        const {intensity, pos} = q.shift();

        if (summits.includes(pos)) {
            if (answer[1] > intensity) {
                answer = [pos, intensity];
            }
            if (answer[1] === intensity) {
                answer[0] = Math.min(answer[0], pos);
            }
            continue;
        }
        if (dist[pos] < intensity) {
            continue;
        }
        
        if (!map[pos]) continue;

        for (const [next, w] of map[pos]) {
            if (gates.includes(next)) {
                continue;
            }
            const nextIntensity = Math.max(intensity, w);
            
            if (dist[next] <= nextIntensity) {
                continue;
            }
            if (answer[1] < nextIntensity) {
                continue;
            }

            q.push({pos: next, intensity: nextIntensity});
            dist[next] = nextIntensity;
        }
    }
    
    return answer;
}