class User {
    constructor({ firstName, lastName, email }) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${this.firstName} ${this.lastName}`;
      this.email = email;
    }
  
    checkLastOnline() {
      console.log(`${this.fullName} was last online at ${Date.now()}`);
    }
  
    sendEmail() {
      console.log(`Email sent to ${email}`);
    }
  
    delete() {
      console.log('User removed');
    }
  }
  
  const user = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
  });
  
  const user2 = new User({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com',
  });
  
  console.log(user.sendEmail === user2.sendEmail );
   

    // in factory pattern 

    const createDog = (name, age) => ({
        name,
        age,
        bark() {
          console.log(`${this.name} is barking`);
        },
        wagTail() {
          console.log(`${this.name} is wagging its tail`);
        }
      });
      
      const dog1 = createDog('Rex', 3);
      const dog2 = createDog('Buddy', 5);
      
      console.log(dog1.bark === dog2.bark); 
      
      