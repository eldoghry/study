// component
(() => {
  interface ICoffee {
    cost(): number;
    getDescription(): string;
  }

  // Concrete Component: SimpleCoffee
  class SimpleCoffee implements ICoffee {
    cost(): number {
      return 5;
    }

    getDescription(): string {
      return "Coffee";
    }
  }

  // Decorator: CoffeeDecorator
  abstract class CoffeeDecorator implements ICoffee {
    coffee: ICoffee;

    constructor(coffee: ICoffee) {
      this.coffee = coffee;
    }

    cost(): number {
      return this.coffee.cost();
    }

    getDescription(): string {
      return this.coffee.getDescription();
    }
  }

  // Concrete Decorator: MilkDecorator
  class MilkDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 2;
    }

    getDescription(): string {
      return this.coffee.getDescription() + ", Milk.";
    }
  }

  // Concrete Decorator: MilkDecorator
  class SugarDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 1;
    }

    getDescription(): string {
      return this.coffee.getDescription() + ", Sugar.";
    }
  }

  // client code
  let coffee = new SimpleCoffee();
  console.log(coffee.getDescription(), coffee.cost()); //5

  coffee = new MilkDecorator(coffee);
  console.log(coffee.getDescription(), coffee.cost()); // 5 + 2 => 7

  coffee = new SugarDecorator(coffee);
  console.log(coffee.getDescription(), coffee.cost()); // 7 + 1 => 8

  console.log(coffee instanceof SimpleCoffee); //false
  console.log(coffee instanceof CoffeeDecorator); //true
})();
