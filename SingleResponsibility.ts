// Bad

{
  class User {
    private name: string;
    private email: string;
    private password: string | null = null;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    setPassword(password: string): void {
      // logic
    }
  }
}

// Good

{
  class User {
    private name: string;
    private email: string;
    private password: string | null = null;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  }

  class PasswordService {
    setPassword(user: User, password: string): void {
      // logic
    }
  }
}
