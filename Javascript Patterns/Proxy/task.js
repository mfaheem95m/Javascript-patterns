/* 
The username property has to be a string that only contains of letters, and is at least 3 characters long
The email property has to be a valid email address.
The age property has to be a number, and has to be at least 18
When a property is retrieved, change the output to ${new Date()} | The value of ${property}} is ${target[property]}. For example if we get user.name, it needs to log 2022-05-31T15:29:15.303Z | The value of name is John
*/
const isAllLetters = require('./validator.js')
const isValidEmail = require('./validator.js')

const user = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    age: 42,
    email: 'john@doe.com',
  };
  
  const proxyObject = new Proxy(user,{
    get : (obj,prop)=> {
    return `${new Date()} the value of ${prop} is ${Reflect.get(obj,prop)}`
    },
    set : (obj,prop,value)=> {
     if(prop === 'email'){
        if(!isValidEmail(value)){     
            console.log('invalid email')
            return false
        }
     }

     if (prop === 'age') {
        console.log('efw');
        if (typeof value !== 'number') {
          throw new Error('Please provide a valid age.');
        }
  
        if (value < 18) {
         throw new Error('User cannot be younger than 18.');
        }
      }
      console.log('ddd',prop,value);
       
      return Reflect.set(obj, prop, value);
    }

  })


  proxyObject.age = 12
  console.log(proxyObject.age)