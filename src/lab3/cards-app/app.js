const cards = require('deckofcards');
const inquirer = require('inquirer');

const s = 'shuffle';
const d = 'draw';

const draw = (shuffle, n = 1) => {
  cards.deck(shuffle)
    .then(deck => cards.draw(deck.deck_id, n))
    .then((result) => {
      console.log('-- CARDS --');
      result.cards.forEach((card) => {
        console.log(`${card.value} of ${card.suit}`);
      });
      console.log('-- REMAING CARDS --');
      console.log(result.remaining);
    })
    .catch(err => console.log(err));
};

// HINT for #3 in Lab
const discardPrompt = (result) => {
  const array = [];
  result.cards.forEach((card, index) => {
    if (card.suit === 'DIAMONDS') {
      card.suit = '♦';
    } else if (card.suit === 'SPADES') {
      card.suit = '♠';
    } else if (card.suit === 'HEARTS') {
      card.suit = '♥';
    } else if (card.suit === 'CLUBS') {
      card.suit = '♣';
    }
    array.push(`Card #${index + 1}: ${card.value} of ${card.suit}`);
  });
  inquirer.prompt([{
    type: 'checkbox',
    message: 'select cards to throw away',
    name: 'cards',
    choices: array,
    validate: (response) => {
      if (response.length < 1) {
        return 'You must choose one or more cards!';
      }
      return true;
    } // implement
  }]).then((response) => {
    const currentCards = findAndRemove(result.cards, response.cards);
    cards.draw(result.deck_id, response.cards.length)
      .then((result) => {
        currentCards.forEach(card => result.cards.push(card));
        print(result);
      })
      .catch(error => console.error(error));
  });
};

// HINT for #4 in Lab
const findAndRemove = (currentCards, throwawayCards) => {
  for (const i in throwawayCards) {
    const temp = throwawayCards[i].split(' ');
    let n = 0;
    for (const j in currentCards) {
      if (currentCards[j].value === temp[0] && currentCards[j].suit === temp[2]) {
        n = j;
      }
    }
    currentCards.splice(n, 1);
  }
  return currentCards;
};

// HINT for #6 in Lab
const print = (cards) => {
  console.log('     —— CARDS ——');
  cards.cards.forEach((card, index) => {
    if (card.suit === 'DIAMONDS') {
      card.suit = '♦';
    } else if (card.suit === 'SPADES') {
      card.suit = '♠';
    } else if (card.suit === 'HEARTS') {
      card.suit = '♥';
    } else if (card.suit === 'CLUBS') {
      card.suit = '♣';
    }
    console.log(`  Card #${index + 1}: ${card.value} of ${card.suit}`);
  });
  console.log('  —— REMAINING CARDS ——');
  console.log(cards.remaining);
};

const play = () => {
  cards.deck(s)
    .then(deck => cards.draw(deck.deck_id, 5))
    .then(result => discardPrompt(result))
    .catch(error => console.error(error));
};

module.exports = {
  play
};
