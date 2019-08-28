const readline = require('readline-promise').default;

module.exports = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});
