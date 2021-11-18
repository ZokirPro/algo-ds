// Bad

{
  class ShapeX {
    public x = 10;
    public y = 10;
  }

  class ShapeY {
    public x = 10;
    public y = 10;
  }

  class Calculator {
    public result: number[] = [];

    calculate(shape: Object): void {
      if (shape instanceof ShapeX) {
        this.result.push(shape.x + shape.y);
      } else if (shape instanceof ShapeY) {
        this.result.push(shape.x * shape.y);
      }
    }
  }

  const calc = new Calculator();

  calc.calculate(new ShapeX());
  calc.calculate(new ShapeY());
}

// Good

{
  interface IShape {
    x: number;
    y: number;
    calculate(): number;
  }

  class ShapeX implements IShape {
    public x = 10;
    public y = 10;

    calculate(): number {
      return this.x + this.y;
    }
  }

  class ShapeY implements IShape {
    public x = 10;
    public y = 10;

    calculate(): number {
      return this.x * this.y;
    }
  }

  class Calculator {
    public result: number[] = [];

    calculate(shape: IShape): void {
      this.result.push(<number>shape.calculate());
    }
  }

  const calc = new Calculator();

  calc.calculate(new ShapeX());
  calc.calculate(new ShapeY());
}
