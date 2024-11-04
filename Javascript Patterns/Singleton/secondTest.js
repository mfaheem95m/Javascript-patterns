let counter = 0;

module.exports = Object.freeze({
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
}); 