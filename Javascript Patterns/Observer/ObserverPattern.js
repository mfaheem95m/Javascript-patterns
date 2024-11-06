const users = [];

module.exports = Object.freeze({
    notify : (data) => users.forEach((observer) => observer(data)),
    subscribe: (func) => users.push(func)
})

