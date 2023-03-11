// code here
const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
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
            let newIndex = Math.floor(Math.random() = (i + 1) * this.numberOfCards);
            //random card
            let oldIndex = this.cards[newIndex];
            //putting value within a special place, make note of i(so not to be randomly assigned)
            this.cards [newIndex] = this.cards[i];
            this.cards[i] = oldIndex;
        }
    }
}

class Card {
    constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    }
}

class Player {
    constructor(name) {
    this.name = name;
    this.score = 0;
    //each player starts at 0
    this.hand = [];
    //hand is unknown
    }
    //going to be used when split deck in half
    addDeck(deck) {
        this.hand = deck;
    }
    
}




createCard() {
    console.log('Creating cards...');
}

function newDeck() {
    return suit.flatMap(suit => {
        return value.map(value => {
            return new Card(suit, value);
        })
    })
}

let newDeck = new Deck();
newDeck.createCard();
