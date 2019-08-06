
module.exports.trappingWater = (arr) => {
    return  new TrapCal(arr).calc()


};

module.exports.TrapCal = class {
    constructor(arr) {
        this.arr = arr;
        const trapLength = arr.length - 1;
        this.result = 0;
        this.water = {
            left: {
                index: 0,
                height: 0
            },
            right: {
                index: trapLength,
                height: 0

            }

        }
    }


    calc(){
        while(this.left <= this.right){
            this.iterate();
        }
        return this.result;
    };

    setHeightFor(direction, height){
        this.containerFor(direction).height = height
    }

    setIndexFor(direction, index){
        this.containerFor(direction).index = index
    }

    updateResultWith(height, waterLv) {
        this.result += height - waterLv;
    }


    containerFor(direction) {
        return this.water[direction];
    }
     heightFor(direction) {
       return   this.containerFor(direction).height;
     }
     indexFor (direction) {
        return  this.containerFor(direction).index;

     }
    trap(direction)  {
        // if left is greater than the heightLeft we will make left = heightLeft
        const {arr} = this;
        const index = this.indexFor(direction)
        const waterLv = arr[index]
        if(waterLv >= height) {
            this.setHeightFor(direction, waterLv);
        } else {
            //Else you will take away the difference between
            this.setHeightFor(direction, waterLv);
            this.updateResultWith(height, waterLv)
        }
        const adjustment = direction === 'left' ? 1 : -1;
        this.adjustWaterIndex(direction, adjustment)
    };

    adjustWaterIndex(direction, adjustment) {
        this.water[direction].index += adjustment;
    }

    iterate(){
        const {left, right, arr} = this;
        //if left hand side is less than right hand side, (Checks which side to start working forward or back from).
        if(arr[left] <= arr[right]){
            this.trap('left');
        } else {
            // else if right is bigger move arr[right] to heightRight.
            this.trap('right');
        }
        return this
    };
    // trapRight () {
    //     const {heightRight, result, right, arr} = this;
    //     if(arr[right] >= heightRight) {
    //         this.heightRight = arr[right];
    //     } else {
    //         //Else you will take away the difference between
    //         this.result = result + heightRight-arr[right];
    //     }
    //     this.right--;
    // }
}
