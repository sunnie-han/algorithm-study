const toMin = (timeString) => {
    const [hr, min] = timeString.split(":").map(val => Number(val))
    return hr * 60 + min
}

const addCleanTime = (min) => min + 10

const getObjectLength = (object) => Object.keys(object).length

function solution(book_time) {
    const bookings = book_time.map(val => [toMin(val[0]), toMin(val[1])])
    bookings.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    // console.log(bookings)
    
    const rooms = {}
    for (let booking of bookings) {
        const [start, end] = booking
        
        let roomNo = getObjectLength(rooms)
        for (let i = 0; i < getObjectLength(rooms); i++) {
            const availableTime = rooms[i]
            if (availableTime <= start) {
                roomNo = i
                break
            }
        }
        
        rooms[roomNo] = addCleanTime(end)
    }
    return getObjectLength(rooms)
}