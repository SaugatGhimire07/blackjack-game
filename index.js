let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

//player details
let player = {
    name: "Saugat",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) {
        return 11
    }

    else if (randomCard > 10) {
        return 10
    }

    else {
        return randomCard
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a card? 🙂"
    }

    else if (sum === 21) {
        message = "Wohoo! You've got a Blackjack! 🥳"
        hasBlackJack = true
    }

    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)

        renderGame()
    }
}