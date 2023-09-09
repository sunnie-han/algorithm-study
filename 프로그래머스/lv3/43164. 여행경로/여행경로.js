function solution(tickets) {
    const routes = {};
    for (let i=0; i<tickets.length; i++) {
        const [departure, arrival] = tickets[i];
        const newArrival = {ticketIndex: i, arrival};

        if(!routes[departure]) {
          routes[departure] = [];
        }
        if(!routes[arrival]) {
          routes[arrival] = [];
        }

        routes[departure].push(newArrival);
        routes[departure].sort((a, b) => a.arrival > b.arrival ? 1 : -1);
    }
    
    const n = tickets.length;

    const dfs = (path, visited) => {
        if (path.length === n + 1) {
            return true;
        }
        
        for (const route of routes[path.at(-1).position]) {
            if (!visited[route.ticketIndex]) {
                continue;
            }
            const newVisited = [...visited];
            newVisited[route.ticketIndex] = false;
            path.push({position: route.arrival, ticketIndex: route.ticketIndex});
            if (!dfs(path, newVisited)) {
                path.pop();
                continue;
            } else {
                return true;
            }
        }
        
        return false;
    }
    
    const isAvailableTicket = Array(n + 1).fill(true);
    const result = [{position: 'ICN', ticketIndex: n}];
    dfs(result, isAvailableTicket);
      
    return result.map(val => val.position);
}