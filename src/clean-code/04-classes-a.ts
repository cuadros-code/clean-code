(() => {

  // NO aplicando principio de responsabilida unica
  type Gender = 'M' | 'F'

  class Person {

    constructor(  
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}

  }

  class User extends Person {

    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }

  }


  class UserSettings extends User {

    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super( email, role, name, gender, birthdate );
    }

  }


  const userSettings = new UserSettings(
    '/src/sas',
    '/bin/build',
    'kevin@gmail.com',
    'Admin',
    'kevin cuadros',
    'M',
    new Date('1999-08-04')
  )

  console.log(userSettings)


})()