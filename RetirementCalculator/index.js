const retirement = (currentAge, retirmentAge) => {
    if(currentAge > retirmentAge){
        console.log('You can already retire');
        return;
    }
    const yearsLeft = Math.abs(currentAge - retirmentAge);
    const currentYear = new Date().getFullYear()
    const retirementYear    = new Date().getFullYear() + yearsLeft;

    console.log(`You have ${yearsLeft} till retirement, the year is now ${currentYear} you will retire in ${retirementYear}`)
};


retirement(20,19)
