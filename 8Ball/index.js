const rl = require('../Util');

module.exports = rl.question( 'What is your question? ', () => {
    const answer = ['Yes.', 'Maybe.', 'No.', 'Ask Again later.'];
    const random = Math.floor(Math.random() * answer.length);
    console.log(answer[random]);
    rl.close();

});
