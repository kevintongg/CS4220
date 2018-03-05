const config = require('./config');
const superagent = require('superagent');

const fetch = command => superagent.get(`${config.url}/${command}`)
  .then(response => response.body)
  .catch(error => error.response.body);

exports.deck = (shuffle) => {
  if (shuffle) {
    return fetch('deck/new/shuffle/?deck_count=1');
  }
  return fetch('deck/new/');
};

exports.draw = (deck, n) => fetch(`/deck/${deck}/draw/?count=${n}`);

exports.shuffle = (deck, n) => fetch(`deck/${deck}/shuffle/`);

