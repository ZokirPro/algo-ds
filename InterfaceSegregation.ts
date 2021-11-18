// Bad

{
  interface IAnimal {
    eat(): void;
    fly(): void;
    sleep(): void;
  }

  class Bird implements IAnimal {
    public eat(): void {
      console.log("Bird is eating");
    }

    public fly(): void {
      console.log("Bird is flying");
    }

    public sleep(): void {
      console.log("Cat is sleeping");
    }
  }

  class Cat implements IAnimal {
    public eat(): void {
      console.log("Cat is eating");
    }

    public fly(): void {
      console.log("Cat is flying");
    }

    public sleep(): void {
      console.log("Cat is sleeping");
    }
  }
}

// Good

{
  interface IBird {
    eat(): void;
    fly(): void;
    sleep(): void;
  }

  interface ICat {
    eat(): void;
    sleep(): void;
  }

  class Bird implements IBird {
    public eat(): void {
      console.log("Bird is eating");
    }

    public fly(): void {
      console.log("Bird is flying");
    }

    public sleep(): void {
      console.log("Cat is sleeping");
    }
  }

  class Cat implements ICat {
    public eat(): void {
      console.log("Cat is eating");
    }

    public sleep(): void {
      console.log("Cat is sleeping");
    }
  }
}
