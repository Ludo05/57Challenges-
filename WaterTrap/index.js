const trap = [0,1,0,1,0,1,0,2,1,2];
//Check if the number before is higher or lower.
//If lower check how much lower it is.
//Check how much
const waterTrap = (numberArray) => {
    //Gets the array length.
    let arrLength = numberArray.length;
    //If no array returns 0
    if(!arrLength) return 0;
    let result = 0;
    //Left side of the array
    let current = 0;
    //Right side of the array
    let right = arrLength - 1;

    //Highest block
    let highestBlock = 0;

    while(current<=right) {
        console.log('______________________________')
        console.log(`number = ${numberArray[current]}`);
        console.log(`highestBlock = ${highestBlock}`);
        console.log(`result = ${result}`)
        console.log('______________________________')
        //If number is greater than highestBlock, highestBlock = number
        if (numberArray[current] >= highestBlock) {
            highestBlock = numberArray[current];
        } else {
            //Add to result because highestBlock is smaller than
            // highestBlock - the number which is the array.
            result =  result + highestBlock-numberArray[current];
        }
            current++;
    }
    return result;
};

console.log(waterTrap(trap));
