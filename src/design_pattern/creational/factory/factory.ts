/*
    I have many Point system [cartesian, polar, ... ]
    In js I can't create many constructor in class 
    x,y cartesian are different in polar system 
    what if we will add new point system that will need  x,y,z ?
    what I need to write descriptive function name or argument names for each case ? 

    Abstraction: The user never really has to access the actual object’s constructor.
    Reusability/Maintenance: Same factories can be used for similar objects and it 
    allows us to add/remove new object classes easily without changing a lot of code.
*/

// Factory method
class Point {
  x: number;
  y: number;

  //general constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  //* factory method in the same class
  static newCartesianPoint(x: number, y: number) {
    return new Point(x, y);
  }

  static newPolarPoint(rho: number, theta: number) {
    //different system implementation
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const p1 = Point.newCartesianPoint(2, 3);
const p2 = Point.newPolarPoint(5, 6);

console.log({ p1, p2 });

// * anther approach: create Factory class and but factory method on it
class Point2 {
  x: number;
  y: number;

  //general constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class PointFactory {
  //factory method
  static newCartesianPoint(x: number, y: number) {
    return new Point2(x, y);
  }

  static newPolarPoint(rho: number, theta: number) {
    //different system implementation
    return new Point2(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const p12 = PointFactory.newCartesianPoint(2, 3);
const p22 = PointFactory.newPolarPoint(5, 6);

console.log({ p12, p22 });

// * =====================================================================================
// example 2
class Employee {
  type: string;
  hourly: string;

  constructor(type = "", hourly = "") {
    this.type = type;
    this.hourly = hourly;
  }

  toString() {
    return `${this.type} ${this.hourly}`;
  }
}

class FullTimeEmployee extends Employee {
  constructor() {
    super("fulltime", "$12");
  }
}

class PartTimeEmployee extends Employee {
  constructor() {
    super("parttime", "$10");
  }
}

class TemporaryEmployee extends Employee {
  constructor() {
    super("temporary", "$8");
  }
}

class ContractorEmployee extends Employee {
  constructor() {
    super("contractor", "$15");
  }
}

class EmployeeFactory {
  static createEmployeeFactory(type: string) {
    let employee: Employee;
    switch (type) {
      case "fulltime":
        employee = new FullTimeEmployee();
        break;

      case "parttime":
        employee = new PartTimeEmployee();
        break;

      case "temporary":
        employee = new TemporaryEmployee();
        break;

      case "contractor":
        employee = new ContractorEmployee();
        break;

      default:
        employee = new FullTimeEmployee();
        break;
    }

    return employee;
  }
}

const employees: Employee[] = [];
employees.push(EmployeeFactory.createEmployeeFactory("fulltime"));
employees.push(EmployeeFactory.createEmployeeFactory("parttime"));
employees.push(EmployeeFactory.createEmployeeFactory("temporary"));
employees.push(EmployeeFactory.createEmployeeFactory("contractor"));

employees.forEach((employee) => {
  console.log(employee.toString());
});
