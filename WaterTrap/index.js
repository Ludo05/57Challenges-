const trap = [0,1,0,2,1,0,1,3,2,1,2,1];

const waterTrap = (numberArray) => {
    //Gets the array length.
    let arrLength = numberArray.length;
    let result = 0;
    //Left side of the array
    let current = 0;
    //Right side of the array
    let lastBlock = arrLength - 1;

    //Highest block
    let highestBlock = 0;

    while(current<=lastBlock) {
        console.log('______________________________')
        console.log(`number = ${numberArray[current]}`);
        console.log(`highestBlock = ${highestBlock}`);
        console.log(`result = ${result}`)
        console.log('______________________________')
        //If current is greater than highestBlock, current equals highestBlock
        if (numberArray[current] >= highestBlock) {
            highestBlock = numberArray[current];
        } else {
            //Take away the current highest from the current number we are at
            result =  result + highestBlock-numberArray[current];
        }
            current++;
    }
    return result;
};

console.log(waterTrap(trap));
