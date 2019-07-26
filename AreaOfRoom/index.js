const rl = require('../Util');

const CONVERSION  = 0.09290304;
rl.question('What is the length of the room in feet? ', lengthInFeet => {
    rl.question('What is the width of the room in feet? ', widthInFeet => {
        console.log(`You have entered dimensions of ${lengthInFeet} feet  by ${widthInFeet} feet`);
        const squaredFeet = lengthInFeet * widthInFeet;
        console.log(`The area is \n${squaredFeet} squared feet`);
        const squaredMetres = CONVERSION * squaredFeet;
        console.log(`${squaredMetres} squared meters`);
        rl.close();
    })
});
