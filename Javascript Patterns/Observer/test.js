const Observable = require('./ObserverPattern')

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observable.subscribe(logger);

Observable.notify("Clicked!"); 
Observable.notify("Clicked!"); 
Observable.notify("Clicked!"); 
Observable.notify("Clicked!"); 
