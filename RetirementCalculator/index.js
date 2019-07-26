const rl = require('../Util');

rl.question('What is your current age? ', currentAge => {
    rl.question('At what age would you like to retire? ', retirementAge => {
        const current = Number(currentAge);
        const retire = Number(retirementAge);
        const date = new Date().getFullYear();
        if(current >= retire){
            console.log('You can already retire');
            return;
        }
        const yearsLeft = retire - current;
        const retirementYear = date + yearsLeft;
        console.log(`You have ${yearsLeft} years until you can retire \nit's ${date} you can retire in ${retirementYear}`)
    });
});


