export class Player {
    constructor(id, username, isHost, playerStates) {
        this.id = id,
        this.username = username,
        this.isHost = isHost,
        this.playerStates = playerStates
    }
}

export class PlayerState {
    constructor(score, bet, hand, playedCard, playsNext, tricksWon) {
        this.score = score,
        this.bet = bet,
        this.hand = hand,
        this.playedCard = playedCard,
        this.playsNext = playsNext,
        this.tricksWon = tricksWon
    }
}

export class Round {
    constructor(numberOfCards, trumps, currentTrick) {
        this.numberOfCards = numberOfCards,
        this.trumps = trumps,
        this.currentTrick = currentTrick
    }
}

export class Table {
    constructor (users, rounds) {
        this.users = users,
        this.rounds = rounds
    }
}