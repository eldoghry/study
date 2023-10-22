interface Strategy {
  execute(a: number, b: number): number;
}

class Context {
  private _strategy: Strategy;

  constructor(strategy: Strategy) {
    this._strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this._strategy = strategy;
  }

  executeStrategy(a: number, b: number) {
    return this._strategy.execute(a, b);
  }
}

class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

(() => {
  const context = new Context(new ConcreteStrategyAdd());
  console.log(context.executeStrategy(10, 5));

  // changing strategy on run time
  context.setStrategy(new ConcreteStrategyMultiply());
  console.log(context.executeStrategy(10, 5));

  context.setStrategy(new ConcreteStrategySubtract());
  console.log(context.executeStrategy(10, 5));
})();
