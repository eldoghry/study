/**
 * Open for extension close for modification
 *
 * suppose I have some products and i want to filter it.
 */

enum Color {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
}

enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

class Product {
  name: string;
  color: Color;
  size: Size;

  constructor(name: string, color: Color, size: Size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class BadFilter {
  filterByColor(products: Product[], color: Color) {
    return products.filter((product) => product.color === color);
  }

  filterBySize(products: Product[], size: Size) {
    return products.filter((product) => product.size === size);
  }

  // assume that I want to filter by both color and size
  //! this is modification!
  filterByColorAndSize() {
    //
  }
}

const products = [
  new Product("Apple", Color.GREEN, Size.SMALL),
  new Product("Tree", Color.GREEN, Size.LARGE),
  new Product("pen", Color.BLUE, Size.SMALL),
];

const badFilter = new BadFilter();
console.log("Green items (BAD FILTER): ");

for (const product of badFilter.filterByColor(products, Color.GREEN)) {
  console.log(`* ${product.name} is green`);
}

// better solution
interface FilterInterface {
  isSatisfied(item: Product): any;
}

abstract class BassSpecFilter implements FilterInterface {
  isSatisfied(item: Product) {
    throw Error("Abstract class");
  }
}

// open for modification
class ColorSpecFilter extends BassSpecFilter {
  color: Color;

  constructor(color: Color) {
    super();
    this.color = color;
  }

  isSatisfied(item: Product) {
    return item.color === this.color;
  }
}

// open for modification
class SizeSpecFilter extends BassSpecFilter {
  size: Size;

  constructor(size: Size) {
    super();
    this.size = size;
  }

  isSatisfied(item: Product) {
    return item.size === this.size;
  }
}

// open for modification
class SpecCombination extends BassSpecFilter {
  specs: (ColorSpecFilter | SizeSpecFilter)[];
  constructor(...specs: any) {
    super();
    this.specs = [...specs];
  }
  isSatisfied(item: Product) {
    return this.specs.every((filter: ColorSpecFilter | SizeSpecFilter) =>
      filter.isSatisfied(item)
    );
  }
}

// close for modification
class BetterFilter {
  filter(items: Product[], spec: SpecCombination) {
    return items.filter((item) => spec.isSatisfied(item));
  }
}

const betterFilter = new BetterFilter();
const greenSpecFilter = new ColorSpecFilter(Color.GREEN);
const largeSpecFilter = new SizeSpecFilter(Size.LARGE);
// passing may filter to combination
const specCombination = new SpecCombination(greenSpecFilter, largeSpecFilter);

// console.log("Green items (Better FILTER): ");
// for (const product of betterFilter.filter(products, greenSpecFilter)) {
//   console.log(`* ${product.name} is green`);
// }

console.log("Green and large items (Better FILTER): ");
for (const product of betterFilter.filter(products, specCombination)) {
  console.log(`* ${product.name} is green and large`);
}
