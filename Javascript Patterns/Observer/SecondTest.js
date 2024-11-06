class Weather {

    constructor(){
        this.tempurature = null;
        this.observers = []
    }

addObserver(observer){
    console.log(observer);
    this.observers.push(observer);
}

removeObserver(observer) {
    console.log(observer);
    
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.setHeadline(this.temperature));
  }

  setTemperature(temperature) {
    this.temperature = temperature;
    this.notifyObservers();
  }
}
class display extends  Weather {
    constructor() {
        super();
        this.headline = '';
      }
    
      setHeadline(headline) {
        console.log(`temp value is ${headline}`);
        this.headline = headline;
        this.notifyObservers(this.headline);
      }

    update(temp){
        console.log(`temp value is ${temp}`);
        
    }
}

const weatherObservable = new Weather()
const tempDisplay1 = new display();
const tempDisplay2 = new display();

weatherObservable.addObserver(tempDisplay1)
weatherObservable.addObserver(tempDisplay2)

weatherObservable.setTemperature(30);