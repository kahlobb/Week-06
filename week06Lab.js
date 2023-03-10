// code here
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }
    
    get numberOfCards() {
        return this.cards.length;
    }

    //need to get a random card for each player
    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            let newIndex = Math.floor(Math.random() = (i +1));
        }
    }
}

class Card {
    constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    return newCard = 
    }
}

class Player {
    constructor() {
    this.player = [player1, player2];
    }
}




createCard() {
    console.log('Creating cards...');
}

function newDeck() {
    return suit.flatMap(suit => )
}

let newDeck = new Deck();
newDeck.createCard();

//splitting the deck to pass out to more players
class Player