(() => {
  // * ---------------------------- Product Interfaces ----------------------------------------------

  // Product1 interface
  interface IChair {
    name: string;
    width: number;
    height: number;
    depth: number;

    getDimensions(): void;
  }

  // Product2 interface
  interface ITable {
    name: string;
    width: number;
    height: number;
    depth: number;

    getDimensions(): void;
  }

  // product that returned by abstract factory
  interface IFurniture extends IChair, ITable {}

  // * --------------------------------------------------------------------------------------------
  // * ---------------------------- Concrete Product 1 ----------------------------------------------

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
      return `${this.name}: ${this.width} X ${this.height} X ${this.depth}`;
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

  // * --------------------------------------------------------------------------------------------
  // * ---------------------------- Product 1 factory ----------------------------------------------

  // chair factory
  class ChairFactory {
    static getChair(type: string): IChair | undefined {
      try {
        if (type === "SmallChair") return new SmallChair();
        else if (type === "MediumChair") return new MediumChair();
        else if (type === "LargeChair") return new LargeChair();
        else throw new Error(`Unknown factory type[${type}]`);
      } catch (error: any) {
        console.log(error?.message);
      }
    }
  }

  // * --------------------------------------------------------------------------------------------
  // * ---------------------------- Concrete Product2 ----------------------------------------------

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
      return `${this.name}: ${this.width} X ${this.height}`;
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

  // * --------------------------------------------------------------------------------------------
  // * ---------------------------- Product 2 Factory ----------------------------------------------

  // Table factory
  class TableFactory {
    static getTable(type: string): ITable | undefined {
      try {
        if (type === "SmallTable") return new SmallTable();
        else if (type === "LargeTable") return new LargeTable();
        else throw new Error(`Unknown factory type[${type}]`);
      } catch (error: any) {
        console.log(error?.message);
      }
    }
  }

  // * --------------------------------------------------------------------------------------------
  // * ----- Abstract Factory [factory of factories] ----------------------------------------------

  class FurnitureFactory {
    static getFurniture(type: string): IFurniture | undefined {
      if (type.toLocaleLowerCase().includes("table"))
        return TableFactory.getTable(type);
      else if (type.toLocaleLowerCase().includes("chair"))
        return ChairFactory.getChair(type);
      else return undefined;
    }
  }

  // * --------------------------------------------------------------------------------------------
  // * ---------------------------- Client App Code  ----------------------------------------------
  const product = FurnitureFactory.getFurniture("SmallChair");
  console.log(product?.getDimensions());
  console.log(FurnitureFactory.getFurniture("LargeTable")?.getDimensions());
  console.log(FurnitureFactory.getFurniture("MediumChair")?.getDimensions());
  console.log(FurnitureFactory.getFurniture("superTable")?.getDimensions());
})();
