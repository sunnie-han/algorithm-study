const isSame = (aList, bList) => {
    for (const key of Object.keys(bList)) {
        if (aList[key] === bList[key]) continue
        return false
    }
    return true
}

const listPush = (list, item) => {
    const newList = {...list}
    if (newList[item] === undefined) {
        newList[item] = 1
    } else {
        newList[item] = newList[item] + 1
    }
    return newList
}

const listPop = (list, item) => {
    const newList = {...list}
    if (newList[item] === 1) {
        delete newList[item]
    } else {
        newList[item] = newList[item] - 1
    }
    return newList
}

const formShoppingList = (want, number) => {
    const shoppingList = {}
    for (let i = 0; i < want.length; i++) {
        shoppingList[want[i]] = number[i]
    }
    return shoppingList
}

function solution(want, number, discount) {
    const shoppingList = formShoppingList(want, number)
    
    let answer = 0
    let currentList = {}
    for (let i = 0; i < 9; i++) {
        const cur = discount[i]
        currentList = listPush(currentList, cur)
    }
    for (let i = 9; i < discount.length; i++) {
        if (i >= 10) {
            currentList = listPop(currentList, discount[i - 10])
        }
        const newItem = discount[i]
        currentList = listPush(currentList, newItem)
        
        if (isSame(currentList, shoppingList)) answer++
    }
    return answer
}