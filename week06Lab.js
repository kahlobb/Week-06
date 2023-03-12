// code here
const suit = ['h', 'd', 'c', 's'];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
const cardMap = new Map();
value.forEach(v => {
    if (v === 'j') {
        cardMap.set(v, 11);
    }
    else if (v === 'q') {
        cardMap.set(v, 12);
    }
    else if (v === 'k') {
        cardMap.set(v, 13);
    }
    else if (v === 'a') {
        cardMap.set(v, 14);
    }
    else {
        cardMap.set(v, v);
    }
});




class Deck {
    constructor(cards) {
        this.cards = cards;
    }
    
    get numberOfCards() {
        return this.cards.length;
    }

    //need to get a random card for each player - this code is literally only shuffling
    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (this.numberOfCards));
            //random card
            const oldIndex = this.cards[newIndex];
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
    this.playerDeck = [];
    }
    //each player starts at 0
    //hand is unknown
    
    updateScore() {
        this.score = this.score += 1;
    }
    //going to be used when split deck in half
    addDeck(deck) {
        this.playerDeck = deck;
    }
}

function createNewDeck() {
    return suit.flatMap(suit => {
        return value.map(value => {
            return new Card(suit, value);
        })
    })
}

function setupGame(player1, player2) {
    const deck = new Deck(createNewDeck());
    deck.shuffle();

    //middle point is index 26
    const middleOfDeck = (deck.numberOfCards / 2);
    // player 1 gets cards from index 0 (start) to 26 (end) which are the two params in slice
    player1.addDeck(deck.cards.slice(0, middleOfDeck));
    // player 2 gets the last half of the cards from 26 (start) to 52 (number of cards is 52 so the end index)
    player2.addDeck(deck.cards.slice(middleOfDeck, deck.numberOfCards));
}

//index is the round aka current card in the stack being played
function outputRoundValues(player1, player2, index) {
    console.log(`${player1.name} plays: ${player1.playerDeck[index].value} of ${player1.playerDeck[index].suit}`);
    console.log(`${player2.name} plays: ${player2.playerDeck[index].value} of ${player2.playerDeck[index].suit}`);
}

function playWar(player1, player2) {
    //loop over player 1s cards
    player1.playerDeck.forEach((card, index) => {
        const player1CardValue = cardMap.get(card.value);
        // grabbing player 2's card based on player ones index in the deck
        const player2CardValue = cardMap.get(player2.playerDeck[index].value);

        //console log each players card value with suit
        outputRoundValues(player1, player2, index);
        
        if(player1CardValue > player2CardValue) {
            player1.updateScore();
            console.log(`${player1.name} has won this round`);
        } else if(player1CardValue < player2CardValue) {
            player2.updateScore();
            console.log(`${player2.name} has won this round`);
        } else {
            console.log('Players tied, no one receives points');
        } 
    })

    //console log to check players properties
    console.log('--- player 1 ---');
    console.log(player1);

    console.log('--- player 2 ---');
    console.log(player2);
}

function calculateFinalScore(player1, player2) {
    // ternary operator to determine the winner on player score conditions
    const winner = player1.score > player2.score ? player1.name : player2.name;
    console.log(`${player1.name} has a score of ${player1.score}!`);
    console.log(`${player2.name} has a score of ${player2.score}!`);
    console.log(`The winner is ${winner}!!`);
}

const Bonnie = new Player('Bonnie');
const Clyde = new Player('Clyde');
setupGame(Bonnie, Clyde);
playWar(Bonnie, Clyde);
calculateFinalScore(Bonnie, Clyde);