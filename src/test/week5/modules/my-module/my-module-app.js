// Include our custom module
const myModule = require('./my-module');

// Call an exported function from my custom module
console.log(myModule.getWelcomeMessage('Albert'));
console.log(myModule.getWelcomeMessage());
