const rl = require('../Util/consoleReadLine');


module.exports = () => {
    const answer = ['Yes.', 'Maybe.', 'No.', 'Ask Again later.'];
    const random = Math.floor(Math.random() * answer.length);
    console.log(answer[random]);
    rl.close()
};

