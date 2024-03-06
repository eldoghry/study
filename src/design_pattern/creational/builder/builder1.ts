// class Product1 {
//   parts: string[] = [];

//   listParts() {
//     console.log(this.parts.join(", "));
//   }
// }

// /** Builder interface: specify methods to create different parts of product  */
// class IBuilder {
//   productPartA(): void {}
//   productPartB(): void {}
//   productPartC(): void {}
// }

// /** specific implementions of the building steps
//  *  your program may have different builders
//  */
// class ConcreteBuilder1 implements IBuilder {
//   private product: Product1 = new Product1();

//   // fresh builder instance which is used in future assembly
//   constructor() {
//     this.reset();
//   }

//   public reset() {
//     this.product = new Product1();
//   }

//   public productPartA(): void {
//     this.product.parts.push("PartA1");
//   }

//   public productPartB(): void {
//     this.product.parts.push("PartB1");
//   }

//   public productPartC(): void {
//     this.product.parts.push("PartC1");
//   }

//   //   builder may have their own  methods
//   // after returning product create fresh one to start producing anther product
//   public getProduct(): Product1 {
//     const product = this.product;

//     this.reset();
//     return product;
//   }
// }

// /**
//  * Not necessary for all cases
//  * is only responsible for executing the building steps in a particular sequence
//  * help when we want create different types of products
//  */
// class IAmDirector {
//   public builder: IBuilder = new IBuilder();

//   public setBuilder(builder: IBuilder) {
//     this.builder = builder;
//   }

//   public buildMinimalProduct() {
//     this.builder.productPartA();
//   }

//   public buildFullFeatureProduct() {
//     this.builder.productPartA();
//     this.builder.productPartB();
//     this.builder.productPartC();
//   }
// }

// function clientCode() {
//   const builder = new ConcreteBuilder1();
//   const director = new IAmDirector();
//   director.setBuilder(builder);

//   console.log("Standard Product");
//   director.buildMinimalProduct();
//   builder.getProduct().listParts();

//   console.log("\n");
//   console.log("Full Feature Product");
//   director.buildFullFeatureProduct();
//   builder.getProduct().listParts();

//   console.log("\n");
//   console.log("Custom Product");
//   builder.productPartA();
//   builder.productPartC();
//   builder.getProduct().listParts();
// }

// clientCode();

class Product1 {
  private _parts: string[] = [];

  public listParts() {
    console.log(this._parts.join(","));
  }

  public addPart(part: string) {
    this._parts.push(part);
  }
}

class IBuilder {
  public producePart1(): void {}
  public producePart2(): void {}
  public producePart3(): void {}
}

abstract class ConcreteBuilder implements IBuilder {
  producePart1() {
    console.log("do nothing, I am abstract");
  }

  producePart2() {
    console.log("do nothing, I am abstract");
  }

  producePart3() {
    console.log("do nothing, I am abstract");
  }
}

class ConcreteBuilder1 extends ConcreteBuilder {
  product: Product1 = new Product1();

  public producePart1(): void {
    this.product.addPart("part A1");
  }

  public producePart2(): void {
    this.product.addPart("part A2");
  }

  public producePart3(): void {
    this.product.addPart("part A3");
  }

  public getProduct(): Product1 {
    const product = this.product;
    this.reset();
    return product;
  }

  public reset() {
    this.product = new Product1();
  }
}

class ConcreteBuilder2 extends ConcreteBuilder {
  product: Product1 = new Product1();

  public producePart1(): void {
    this.product.addPart("part B1");
  }

  public producePart2(): void {
    this.product.addPart("part B2");
  }

  public producePart3(): void {
    this.product.addPart("part B3");
  }

  public getProduct(): Product1 {
    const product = this.product;
    this.reset();
    return product;
  }

  public reset() {
    this.product = new Product1();
  }
}

class BuilderDirector {
  builder: ConcreteBuilder;

  constructor(builder: ConcreteBuilder) {
    this.builder = builder;
  }

  setBuilder(builder: ConcreteBuilder) {
    this.builder = builder;
  }

  buildStandardProduct() {
    this.builder.producePart1();
  }

  buildFullFeatureProduct() {
    this.builder.producePart1();
    this.builder.producePart2();
    this.builder.producePart3();
  }
}

const builder1 = new ConcreteBuilder1();
const director = new BuilderDirector(builder1);

director.buildStandardProduct();
builder1.getProduct().listParts();

director.buildFullFeatureProduct();
builder1.getProduct().listParts();

const builder2 = new ConcreteBuilder2();
director.setBuilder(builder2);
director.buildFullFeatureProduct();
builder2.getProduct().listParts();
