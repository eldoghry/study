/*
Starbuzz coffee shop
company need to add different size (small, medium, large)
*/
(() => {
  enum BeverageSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
  }

  abstract class Beverage {
    size: BeverageSize = BeverageSize.SMALL;
    abstract description: string;
    abstract cost(): number;

    setSize(size: BeverageSize): void {
      this.size = size;
    }

    getSize(): string {
      return this.size;
    }

    getDescription(): string {
      return `(${this.getSize()}) ${this.description}`;
    }

    toString(): void {
      console.log(`${this.getDescription()} price: ${this.cost()}`);
    }
  }

  abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
    abstract getSize(): string;
    abstract setSize(b: BeverageSize): void;
  }

  // create different beverage
  class Espresso extends Beverage {
    description: string = "Espresso";

    constructor() {
      super();
    }

    cost(): number {
      let price = 1.5;

      this.getSize() === BeverageSize.MEDIUM ? (price += 0.2) : null;
      this.getSize() === BeverageSize.LARGE ? (price += 0.4) : null;

      return price;
    }
  }

  // add some condiments
  class Milk extends CondimentDecorator {
    beverage: Beverage;
    description: string = "Milk";

    constructor(beverage: Beverage) {
      super();
      this.beverage = beverage;
    }

    getDescription(): string {
      return this.beverage.getDescription() + ", " + this.description;
    }

    cost(): number {
      let price = this.beverage.cost();

      this.getSize() === BeverageSize.SMALL ? (price += 0.2) : null;
      this.getSize() === BeverageSize.MEDIUM ? (price += 0.4) : null;
      this.getSize() === BeverageSize.LARGE ? (price += 0.6) : null;

      return price;
    }

    setSize(size: BeverageSize): void {
      this.beverage.setSize(size);
    }

    getSize(): string {
      return this.beverage.getSize();
    }
  }

  // Main Context
  (() => {
    let coffee = new Espresso();
    coffee.toString();

    coffee.setSize(BeverageSize.MEDIUM);
    coffee.toString();

    coffee = new Milk(coffee);
    coffee.toString();

    coffee.setSize(BeverageSize.LARGE);
    coffee.toString();
  })();
})();
