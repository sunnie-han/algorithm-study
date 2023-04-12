const toMin = (timeString) => {
    const [hr, min] = timeString.split(":").map(val => Number(val))
    return hr * 60 + min
}

const addCleanTime = (min) => min + 10

function solution(book_time) {
    const bookings = book_time.map(val => [toMin(val[0]), toMin(val[1])])
    bookings.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    
    const rooms = []
    for (let booking of bookings) {
        const [start, end] = booking
        
        let roomNo = rooms.length
        for (let i = 0; i < rooms.length; i++) {
            const availableTime = rooms[i]
            if (availableTime <= start) {
                roomNo = i
                break
            }
        }
        
        rooms[roomNo] = addCleanTime(end)
    }
    return rooms.length
}