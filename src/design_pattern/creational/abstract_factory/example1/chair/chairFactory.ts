import IChair from "./IChair";

//concrete products
abstract class ConcreteChair implements IChair {
  name: string;
  width: number;
  height: number;
  depth: number;

  constructor() {
    this.name = "";
    this.width = 0;
    this.height = 0;
    this.depth = 0;
  }

  getDimensions(): {} {
    return `${this.width} X ${this.height} X ${this.depth}`;
  }
}

class SmallChair extends ConcreteChair {
  constructor() {
    super();
    this.name = "Small Chair";
    this.width = 40;
    this.height = 40;
    this.depth = 40;
  }
}

class MediumChair extends ConcreteChair {
  constructor() {
    super();
    this.name = "Medium Chair";
    this.width = 60;
    this.height = 60;
    this.depth = 60;
  }
}

class LargeChair extends ConcreteChair {
  constructor() {
    super();
    this.name = "Large Chair";
    this.width = 80;
    this.height = 80;
    this.depth = 80;
  }
}

// chair factory
export default class ChairFactory {
  static getChair(type: string): IChair | undefined {
    try {
      if (type === "SmallChair") return new SmallChair();
      else if (type === "MediumChair") return new MediumChair();
      else if (type === "LargeChair") return new LargeChair();
      else throw new Error(`Unkown factory type[${type}]`);
    } catch (error) {
      console.log(error);
    }
  }
}
