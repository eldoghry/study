/*
Starbuzz coffee shop

Assume I have many beverages like (Espresso, Decaf, DarkRoast, HouseBlend) each one have cost
and I want to add some condiments اضافات like (Milk, Mocha, Soy, whip) and also each one have additional cost

stupid solution: I can implement classes like EspressoMilk, EspressoMocho .... and each one have it cost implemention

better solution: decorator design pattern
*/

abstract class Beverage {
  abstract description: string;
  abstract cost(): number;

  getDescription(): string {
    return this.description;
  }

  toString(): void {
    console.log(this.getDescription() + ": " + this.cost());
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

// create different beverage

class Espresso extends Beverage {
  description: string = "Espresso";

  constructor() {
    super();
  }

  cost(): number {
    return 1.5;
  }
}

class DarkRoast extends Beverage {
  description: string = "DarkRoast";

  constructor() {
    super();
  }

  cost(): number {
    return 1.2;
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
    return this.beverage.cost() + 0.2;
  }
}

class Mocka extends CondimentDecorator {
  beverage: Beverage;
  description: string = "Mocka";

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost(): number {
    return this.beverage.cost() + 0.3;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", " + this.description;
  }
}

// Main Context
(() => {
  let coffee1 = new Espresso();
  coffee1.toString(); // 1.5

  // add condiments at runtime
  // add milk
  coffee1 = new Milk(coffee1);
  coffee1.toString(); // 1.5 + 0.2 = 1.7

  //add Mocka
  coffee1 = new Mocka(coffee1);
  coffee1.toString(); // 1.7 + 0.3 = 2

  // example 2
  let coffee2 = new DarkRoast();
  coffee2.toString(); //1.2

  // add condiments at runtime
  // add milk
  coffee2 = new Milk(coffee2);
  coffee2.toString(); //1.4

  //add Mocka
  coffee2 = new Mocka(coffee2);
  coffee2.toString(); //1.7
})();
