function solution(s) {
    const asc = (a, b) => a.length - b.length
    return s.slice(2, s.length - 2).split("},{").sort(asc).reduce((b, c) => {
        const d = c.split(",").map((e) => Number(e))
        const f = d.filter(g => !b.includes(g))
        b.push(...f)
        return b
    }, [])
}