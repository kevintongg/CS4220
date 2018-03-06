const config = require('./config');
const superagent = require('superagent');


const _fetch = command => superagent.get(`${config.url}/${command}`)
  .then(response => response.body)
  .catch(error => error.response.body);

exports.deck = (shuffle) => {
  if (shuffle) {
    return _fetch('deck/new/shuffle/?deck_count=1');
  }
  return _fetch('deck/new/');
};

exports.draw = (deck, n) => _fetch(`/deck/${deck}/draw/?count=${n}`);

exports.shuffle = (deck, n) => _fetch(`deck/${deck}/shuffle/`);

