(() => {
  class Memento {
    score: number;
    inventory: Set<string>;
    level: number;
    location: { x: number; y: number; z: number };

    constructor(
      score: number,
      level: number,
      inventory: Set<string>,
      location: { x: number; y: number; z: number }
    ) {
      this.score = score;
      this.inventory = inventory;
      this.level = level;
      this.location = location;
    }
  }

  // Originator
  class GameCharacter {
    #score: number;
    #inventory: Set<string>;
    #level: number;
    #location: { x: number; y: number; z: number };

    constructor() {
      this.#score = 0;
      this.#inventory = new Set();
      this.#level = 1;
      this.#location = { x: 0, y: 0, z: 0 };
    }

    set score(score: number) {
      this.#score = score;
    }

    get score(): number {
      return this.#score;
    }

    registerKill() {
      this.#score += 100;
    }

    progressToNextLevel() {
      this.#level += 1;
    }

    addToInventory(item: string) {
      this.#inventory.add(item);
    }

    moveForward(distance: number) {
      this.#location.x += distance;
      this.#location.y += distance;
      this.#location.z += distance;
    }

    status() {
      console.log(
        `  🎮 Level: [${this.#level}] | Score[${
          this.#score
        }] | Inventory[${Array.from(this.#inventory).join(",")}] | Location[${
          this.#location.x
        }, ${this.#location.y}, ${this.#location.z}]`
      );
    }

    set memento(memento: Memento) {
      this.#score = memento.score;
      this.#inventory = memento.inventory;
      this.#location = memento.location;
      this.#level = memento.level;
    }

    get memento() {
      return new Memento(
        this.#score,
        this.#level,
        new Set(this.#inventory),
        Object.assign({}, this.#location)
      );
    }
  }

  class CareTaker {
    #mementos: Memento[] = [];
    #originator: GameCharacter;

    constructor(originator: GameCharacter) {
      this.#originator = originator;
    }

    save() {
      const memento = this.#originator.memento;
      this.#mementos.push(memento);
      console.log(`✅ checkpoint ${this.#mementos.length} saved`);
    }

    restore(checkpoint: number) {
      this.#originator.memento = this.#mementos[checkpoint];
      console.log(`🔙 CareTaker restore checkpoint ${checkpoint}`);
    }
  }

  function main() {
    const NARUTO = new GameCharacter();
    const careTaker = new CareTaker(NARUTO);

    console.log("=========================================");
    console.log("START GAME");
    NARUTO.registerKill();
    NARUTO.registerKill();
    NARUTO.moveForward(1);
    NARUTO.addToInventory("Kunai");

    NARUTO.status();
    console.log("save 1st checkpoint");
    careTaker.save();

    NARUTO.registerKill();
    NARUTO.moveForward(2);
    NARUTO.progressToNextLevel();
    NARUTO.addToInventory("Scroll");

    NARUTO.status();
    console.log("save 2nd checkpoint");
    careTaker.save();

    // player continue playing
    NARUTO.registerKill();
    NARUTO.moveForward(2);
    NARUTO.addToInventory("Shuriken");
    NARUTO.status();

    console.log("naurto dead, restart from checkpoint");
    careTaker.restore(1);
    NARUTO.status();

    console.log("player want to load 1st checkpoint");
    careTaker.restore(0);
    NARUTO.status();
  }
  main();
})();
