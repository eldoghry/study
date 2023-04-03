/*
Liskov Substitution Principle

class B is subclass of A 
if there is function need to do some behavior if we passing object of A
it should do the same behavior if we passing object of B

This means that, given that class B is a subclass of class A, 
we should be able to pass an object of class B to any method that expects an object of class A 
and the method should not give any weird output in that case.
*/

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(value: number) {
    this.width = value;
  }

  setHeight(value: number) {
    this.height = value;
  }

  toString() {
    console.log(`${this.width} x ${this.height}`);
  }
}

class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }

  setWidth(value: number) {
    console.log("sq set run");
    super.setWidth(value);
    super.setHeight(value);
  }

  setHeight(value: number) {
    super.setWidth(value);
    super.setHeight(value);
  }
}

function calcArea(rec: Rectangle) {
  console.log(`Area(${rec.width} x ${rec.height}): ${rec.width * rec.height}`);
}

const rc = new Rectangle(2, 3);
const sq = new Square(2);

rc.toString(); //2 x 3
sq.toString(); // 2 x 2
sq.width = 10;
sq.toString(); // 10 x 2 !! supposed to be 10 x 10

calcArea(rc);
calcArea(sq); // 20 not 100 ! wired behavior
