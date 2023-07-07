import ITable from "./ITable";

//concrete products
abstract class ConcreteTable implements ITable {
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
    return `${this.width} X ${this.height}`;
  }
}

class SmallTable extends ConcreteTable {
  constructor() {
    super();
    this.name = "Small Table";
    this.width = 40;
    this.height = 40;
    this.depth = 40;
  }
}

class LargeTable extends ConcreteTable {
  constructor() {
    super();
    this.name = "Large Table";
    this.width = 80;
    this.height = 80;
    this.depth = 80;
  }
}

// Table factory
export default class TableFactory {
  static getTable(type: string): ITable | undefined {
    try {
      if (type === "SmallTable") return new SmallTable();
      else if (type === "LargeTable") return new LargeTable();
      else throw new Error(`Unkown factory type[${type}]`);
    } catch (error) {
      console.log(error);
    }
  }
}
