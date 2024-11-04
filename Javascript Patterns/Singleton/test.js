const singletonCounter =  require('./SingletonPattern.js');
const singletonCounter2 =  require('./secondTest');

singletonCounter2.increment();
singletonCounter2.increment();
singletonCounter2.decrement();
console.log('singletonCounter', singletonCounter,singletonCounter2);
console.log('Current Count:', singletonCounter.getCount(),singletonCounter2.getCount());

singletonCounter.incrementCount();
console.log('Count after increment:', singletonCounter.getCount());

singletonCounter.decrementCount();
console.log('Count after decrement:', singletonCounter.getCount());
