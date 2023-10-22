(() => {
  // core object example
  class Computer {
    description() {
      return "Computer";
    }
  }

  // decorator
  abstract class ComputerDecorator extends Computer {
    abstract description(): string;
  }

  // Concrete decorator
  class Disk extends ComputerDecorator {
    computer: Computer;

    constructor(computer: Computer) {
      super();
      this.computer = computer;
    }

    description(): string {
      return this.computer.description() + " and disk";
    }
  }

  // Concrete decorator
  class Monitor extends ComputerDecorator {
    computer: Computer;

    constructor(computer: Computer) {
      super();
      this.computer = computer;
    }

    description(): string {
      return this.computer.description() + " and monitor";
    }
  }

  function main() {
    let computer = new Computer();
    console.log(computer.description());

    computer = new Disk(computer);
    console.log(computer.description());

    computer = new Monitor(computer);
    console.log(computer.description());
  }
  main();
})();
