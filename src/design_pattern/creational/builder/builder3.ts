/* 
to create builder

I need builder, builder interface, Director use builder
*/

// CaslteDirector
// IglooDirector
// HouseBoatDirector

(() => {
  // product Interface
  class House {
    doors = 0;
    windows = 0;
    wallMaterial = "";
    buildingType = "";

    constructor() {}
    toString() {
      console.log(
        `${this.buildingType} built from ${this.wallMaterial} walls, and consist of [${this.doors} doors - ${this.windows} windows]`
      );
    }
  }

  interface IHouseBuilder {
    setDoorsNumber(n: number): HouseBuilder;
    setWindowsNumber(n: number): HouseBuilder;
    setWallMaterial(material: string): HouseBuilder;
    setBuildingType(type: string): HouseBuilder;
    getHouse(): House;
  }

  class HouseBuilder implements IHouseBuilder {
    house: House;

    constructor() {
      this.house = new House();
    }

    setDoorsNumber(n: number) {
      this.house.doors = n;
      return this;
    }

    setWindowsNumber(n: number) {
      this.house.windows = n;
      return this;
    }

    setWallMaterial(material: string) {
      this.house.wallMaterial = material;
      return this;
    }

    setBuildingType(type: string) {
      this.house.buildingType = type;
      return this;
    }

    getHouse() {
      return this.house;
    }
  }

  class CaslteDirector {
    static constract(): House {
      return new HouseBuilder()
        .setDoorsNumber(8)
        .setBuildingType("castle")
        .setWallMaterial("rock")
        .setWindowsNumber(50)
        .getHouse();
    }
  }

  class IglooDirector {
    static constract(): House {
      return new HouseBuilder()
        .setBuildingType("Igloo")
        .setWallMaterial("ice")
        .setDoorsNumber(1)
        .getHouse();
    }
  }

  class HouseBoatDirector {
    static constract(): House {
      return new HouseBuilder()
        .setBuildingType("HouseBoat")
        .setWallMaterial("wood")
        .setDoorsNumber(1)
        .setWindowsNumber(4)
        .getHouse();
    }
  }

  // client side
  let house = CaslteDirector.constract();
  house.toString();

  house = IglooDirector.constract();
  house.toString();

  house = HouseBoatDirector.constract();
  house.toString();
})();
