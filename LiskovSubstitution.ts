// Bad

{
  abstract class Vehicle {
    public abstract engine: number;

    public abstract run(): void;
    public abstract stop(): void;
  }

  class Car extends Vehicle {
    public engine: number;

    constructor(engine: number) {
      super();
      this.engine = engine;
    }

    public run(): void {
      console.log("Car is running");
    }

    public stop(): void {
      console.log("Car is stopped");
    }
  }

  class Bike extends Vehicle {
    public engine: number;

    constructor(engine: number) {
      super();
      this.engine = engine;
    }

    public run(): void {
      console.log("Car is running");
    }

    public stop(): void {
      console.log("Car is stopped");
    }
  }

  const bike: Bike = new Bike(1.6);
}

// Good

{
  interface Vehicle {
    run(): void;
    stop(): void;
  }

  abstract class VehicleWithEngine implements Vehicle {
    public abstract engine: number;

    public abstract run(): void;
    public abstract stop(): void;
  }

  class Car extends VehicleWithEngine {
    public engine: number;

    constructor(engine: number) {
      super();
      this.engine = engine;
    }

    public run(): void {
      console.log("Car is running");
    }

    public stop(): void {
      console.log("Car is stopped");
    }
  }

  class Bike implements Vehicle {
    public run(): void {
      console.log("Car is running");
    }

    public stop(): void {
      console.log("Car is stopped");
    }
  }

  const bike: Bike = new Bike();
}
