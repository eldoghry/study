(() => {
  class Memento {
    #state: string;
    constructor(state: string) {
      this.#state = state;
    }

    get state() {
      return this.#state;
    }
  }

  class Originator {
    #state: string;
    constructor(state: string) {
      this.#state = state;
    }

    set state(state: string) {
      this.#state = state;
      console.log(` Originator new State: ${state}`);
    }

    get state(): string {
      //   console.log(` Originator current State: ${this.#state}`);
      return this.#state;
    }
  }

  class CareTaker {
    #mementos: Memento[] = [];
    #originator: Originator;

    constructor(originator: Originator) {
      this.#originator = originator;
    }

    save(memento: Memento) {
      this.#mementos.push(memento);
      console.log(`✅ CareTaker Backup state`);
    }

    restore(index: number) {
      console.log(`🔙 CareTaker restore state`);
      this.#originator.state = this.#mementos[index].state;
    }
  }

  function main() {
    const originator = new Originator("Initial State");
    const careTaker = new CareTaker(originator);

    console.log("=========================================");
    console.log("Setting state for Originator");
    originator.state = "state 1";
    originator.state = "state 2";

    careTaker.save(new Memento(originator.state)); // take first snap shoot
    originator.state = "state 3";

    careTaker.save(new Memento(originator.state)); // take second snap shoot
    careTaker.restore(0); // restore first snap shot
    originator.state;
    careTaker.restore(1); // restore second snap shot
    originator.state;
    careTaker.restore(0); // restore first snap shot again
    originator.state;
  }
  main();
})();
