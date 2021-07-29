// Code your solutions in this file
const writeCards = (names, eventName) => {
    let cardArray = [];
    for(let i = 0; i < names.length; i++) {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cardArray
}

const countDown = (aNum) => {
    while(aNum >= 0) {
        console.log(aNum)
        aNum--
    }
}