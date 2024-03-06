(() => {
  // Product Interface
  interface IChair {
    height: number;
    width: number;
    depth: number;
    getDimensions(): {};
  }

  // Concrete Products parent
  class Chair implements IChair {
    height: number = 0;
    width: number = 0;
    depth: number = 0;

    createObject() {
      return this;
    }

    getDimensions(): {} {
      return {
        height: this.height,
        width: this.width,
        depth: this.depth,
      };
    }

    toString() {
      console.log(`${this.height}, ${this.width}, ${this.depth}`);
    }
  }

  // Concrete Products childs
  class SmallChair extends Chair {
    constructor() {
      super();
      this.height = 5;
      this.width = 5;
      this.depth = 5;
    }
  }

  class MediumChair extends Chair {
    constructor() {
      super();
      this.height = 10;
      this.width = 10;
      this.depth = 10;
    }
  }

  class LargeChair extends Chair {
    constructor() {
      super();
      this.height = 20;
      this.width = 20;
      this.depth = 20;
    }
  }

  class ChairFactor {
    getChair(chairType: string): IChair {
      if (chairType === "l") return new LargeChair();
      else if (chairType === "m") return new MediumChair();
      else return new SmallChair();
    }
  }

  // client application
  (() => {
    const chairFactory = new ChairFactor();
    let chair = chairFactory.getChair("l");
    chair.toString();

    chairFactory.getChair("m").toString();
    chairFactory.getChair("s").toString();
  })();
})();
