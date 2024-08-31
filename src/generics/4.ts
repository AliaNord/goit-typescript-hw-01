type UserTwo = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  // "UserTwo" because of conflict with basic/6.ts

  function createOrUpdateUser(initialValues: Partial<UserTwo>) {
    return {...initialValues}
  }

  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });