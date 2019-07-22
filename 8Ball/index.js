
const EightBall = (question) => {
    const answer = ['Yes', 'No', 'Ask Again later'];

    const random = Math.abs(Math.floor(Math.random() * answer.length - 1) + 1);

    console.log(`${question}?  \n ... ${answer[random]}`)
};


EightBall('Is this good code');
