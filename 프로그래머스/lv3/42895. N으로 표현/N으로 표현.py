def solution(N, number):
    def operations(a, b):
        result = [a+b, a-b, b-a, a*b]
        if a != 0:
            result.append(b//a)
        if b != 0:
            result.append(a//b)
        return set(result)
    
    answer = -1
    
    counts = [[]]
    memo = set([])
    for i in range(1, 9):
        singleNum = int(str(N)*i)
        if singleNum == number:
            return i
        ith_possible_value = set([singleNum])
        for aCount in range(1, i // 2 + 1):
            bCount = i - aCount
            temps = set([])
            a_list = counts[aCount]
            b_list = counts[bCount]
            for a in a_list:
                for b in b_list:
                    temp = operations(a, b)
                    if number in temp:
                        return i
                    temps.update(temp - memo)
                    
            ith_possible_value.update(temps - memo)
        counts.append(list(ith_possible_value))
    
    return answer