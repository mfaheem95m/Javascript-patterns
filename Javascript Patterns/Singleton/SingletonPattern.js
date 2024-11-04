let instance

class Counter {
    constructor (){
        if(instance){
            throw new Error("You can only create one instance!");   
        }
        this.counter = 0
        instance = this
    }

    getCount(){
        return this.counter;
    }
    incrementCount() {
        return ++this.counter;
    }
    decrementCount() {
        return --this.counter;
    }
}

const singeltonCounter = new Counter();
// const singeltonCounter2 = new Counter();

 singeltonCounter.incrementCount();
 singeltonCounter.incrementCount();
 singeltonCounter.incrementCount();
 singeltonCounter.incrementCount();
  console.log(instance);

module.exports = singeltonCounter;