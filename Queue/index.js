class Set{
    constructor(){
        this.collection = []
    }

    has(item){
        return (this.collection.indexOf(item) !== -1)
    }

    print(){
        console.log(this.collection)
    }

    size(){
        return this.collection.length
    }


    add(item){
        if(!this.has(item)){
            this.collection.push(item)
        }
    }
}

const set = new Set();
set.add(2)
set.add(4)
set.add(2)
set.add(2)
set.print()

