let id = 0
const createUser = (firstName, lastName) => ({
    id: ++id,
    createdAt: Date.now(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  });
  
  console.log(createUser("John", "Doe"));
  console.log(createUser("Sarah", "Doe"));
  console.log(createUser("Lydia", "Hallie"));