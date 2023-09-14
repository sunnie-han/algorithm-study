function solution(N, road, K) {
    const graph = {};
    const append = (a, b) => {
        if (graph[a]){
            graph[a].push(b);
        } else{
            graph[a] = [b];
        }
    }
    for (const [a,b,c] of road){
        append(a, {dest: b,c});
        append(b, {dest: a,c});
    }
    
    const dist = Array(N+1).fill(Infinity);
    const q = [{dep: 1, cost: 0}];
    dist[1] = 0;
    
    while(q.length > 0){
        const {dep, cost} = q.shift();
        if (cost <= K) {
            if (!graph[dep]) continue;
            for (const {dest, c} of graph[dep]){
                const cost = dist[dep] + c;
                if (cost > K) continue;
                if (cost > dist[dest]) continue;
                dist[dest] = cost;
                q.push({dep: dest, cost});
                q.sort((a,b)=> a.cost - b.cost);
            }
        } else {
            continue;
        }
    }
    return dist.filter(val => val <= K).length;
}