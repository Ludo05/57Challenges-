const trap = [0,1,0,1,0,1,0,2];
//Check if the number before is higher or lower.
//If lower check how much lower it is.
//Check how much
const waterTrap = (numberArray) => {
    let arrLength = numberArray.length;
    if(!arrLength) return 0;
    let result = 0;
    let left = 0;
    let right = arrLength - 1;
    let maxLeft = 0;

    while(left<=right){
            if(numberArray[left] >=maxLeft) maxLeft = numberArray[left];
            else result += maxLeft-numberArray[left];
            left++;
    }
    return result;
};

console.log(waterTrap(trap));
