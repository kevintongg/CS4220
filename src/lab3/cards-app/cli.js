const app = require('./app');
const yargs = require('yargs');

const flags = yargs.usage('$0: Usage <cmd> [options]')
  .command({
    command: 'draw',
    desc: 'draws a card from the deck',
    builder: yargs => yargs.option('s', {
      alias: 'shuffle',
      describe: 'shuffle the deck before drawing'
    }).option('n', {
      alias: 'number',
      describe: 'number of cards to draw'
    }),
    handler: (argv) => {
      app.draw(argv.shuffle, argv.number);
    }
  })
  .command({
    command: 'play',
    desc: 'Play a 5 card draw game',
    handler: (argv) => {
      app.play();
    }
  })
  .help('help')
  .argv;
