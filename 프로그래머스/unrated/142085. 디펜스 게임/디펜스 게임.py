from heapq import heappush, heappop

def solution(n, k, enemy):
    answer = 0
    heap = []
    
    for e in enemy:
        n -= e
        answer += 1
        heappush(heap, -e)
        
        if k == 0 and n < 0:
            return answer - 1
        
        if k == 0 and n == 0:
            return answer
        
        if n < 0 and k != 0:
            n += -heappop(heap)
            k -= 1
    
    return answer