function solution(clothes) {
    const closet = {}
    for (const cloth of clothes) {
        const [name, category] = cloth
        if (closet[category] === undefined) {
            closet[category] = [name]
        } else {
            closet[category].push(name)
        }
    }
    let answer = 1
    for (const key of Object.keys(closet)) {
        answer = answer * (closet[key].length + 1)
    }
    return answer - 1
}