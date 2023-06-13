class Duck {
  flyAble: FlyBehavior | null = null;
  quackingAble: QuakeBehavior | null = null;

  swim() {
    console.log("I can swim");
  }

  setFlyable(f: FlyBehavior) {
    this.flyAble = f;
  }

  performFly() {
    return this.flyAble?.fly() || "not implemented yet";
  }
}

interface FlyBehavior {
  fly(): void;
}

interface QuakeBehavior {
  makeSound(): void;
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am fly with wings");
  }
}

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly.");
  }
}

class LoudQuaking implements QuakeBehavior {
  makeSound(): void {
    console.log("Quaking load.");
  }
}

class Duck1 extends Duck {
  constructor() {
    super();
    this.setFlyable(new FlyWithWings());
  }
}

const d1 = new Duck1();
d1.performFly();

d1.setFlyable(new FlyNoWay());
d1.performFly();
