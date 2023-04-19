function solution(people, limit) {
    people.sort((a, b) => b - a)
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        const isLoadable = people[left] + people[right] <= limit
        if (isLoadable) {
            right--
        }
        left++
    }
    return left
}