/*
Builder: 
Used when we try to build complex object 

instead of use big constructor (name, age, job ...)
It build object in many steps, not all steps are mandatory because builder class have default values
It will be helpful in case I want to validate each step   
*/

// ****************************************************************************
// * example 1
class User {
  name: string;
  age: number;
  address: string;
  dob: Date;
  jobTitle: string;
  company: string;

  constructor(userBuilder: UserBuilder) {
    this.name = userBuilder.name;
    this.age = userBuilder.age;
    this.address = userBuilder.address;
    this.dob = userBuilder.dob;
    this.jobTitle = userBuilder.jobTitle;
    this.company = userBuilder.company;
  }
}

class UserBuilder {
  // hold user object values in initialization
  name: string = "";
  age: number = 0;
  address: string = "";
  dob: Date = new Date();
  jobTitle: string = "";
  company: string = "";

  constructor(name: string) {
    this.name = name;
  }

  setAge(value: number) {
    if (value < 18) {
      throw new Error("Age must be >= 18");
    }
    this.age = value;
    return this;
  }

  setAddress(value: string) {
    this.address = value;
    return this;
  }

  setJobTitle(value: string) {
    this.jobTitle = value;
    return this;
  }

  setCompany(value: string) {
    this.company = value;
    return this;
  }

  build() {
    const user = new User(this);
    return user;
  }
}

const user = new UserBuilder("Mohamed Magdy").setAge(22).build();
// console.log(user);

// ****************************************************************************
// * example 2
class Tag {
  name: string;
  value: string;
  id: number = Date.now();
  children: Tag[] = [];

  static get indentSize() {
    return 2;
  }

  constructor(name = "", value = "") {
    this.name = name;
    this.value = value;
  }

  addChild(name: string, value: string) {
    const child = new Tag(name, value);
    this.children.push(child);
    return this;
  }

  toStringImpl(indent = Tag.indentSize) {
    const html: string[] = [];
    html.push(`${" ".repeat(indent)}<${this.name}>`);
    html.push(this.value ? `\n${" ".repeat(indent * 2)}${this.value}\n` : "\n");

    for (const child of this.children) {
      html.push(child.toStringImpl(indent * 2));
    }

    html.push(`${" ".repeat(indent)}</${this.name}>\n`);

    return html.join("");
  }

  toString() {
    return this.toStringImpl();
  }
}

class HtmlBuilder {
  root: Tag;
  rootName: string;

  constructor(rootName: string) {
    this.rootName = rootName;
    this.root = new Tag(rootName);
  }

  toString(): string {
    return this.root.toString();
  }

  build() {
    return this.root;
  }
}

const words = ["hello", "world"];
const builder = new HtmlBuilder("ul");
for (const word of words) {
  builder.root.addChild("li", word);
}

// console.log(builder.toString());
// ****************************************************************************
// * example 3

class Person {
  name: string;
  age: number;
  dob: string;
  street: string;
  city: string;
  jobTitle: string;
  company: string;

  constructor() {
    this.name = this.street = this.city = this.company = this.jobTitle = "";
    this.age = 0;
    this.dob = "";
  }

  toString() {
    return `🚩 ${this.name} is ${this.age} years old, lives in ${this.street} - ${this.city}, works on ${this.company} as ${this.jobTitle}`;
  }
}

// builder of many builders
class PersonBuilder {
  person: Person;

  constructor(person: Person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  get profile() {
    return new PersonProfileBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  at(value: string) {
    this.person.street = value;
    return this;
  }

  in(value: string) {
    this.person.city = value;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  // constructor not needed
  constructor(person: Person) {
    super(person);
  }
  job(value: string) {
    this.person.jobTitle = value;
    return this;
  }

  at(value: string) {
    this.person.company = value;
    return this;
  }
}

class PersonProfileBuilder extends PersonBuilder {
  // constructor not needed
  constructor(person: Person) {
    super(person);
  }
  name(value: string) {
    this.person.name = value;
    return this;
  }

  born(value: string) {
    this.person.dob = new Date(value).toISOString();
    this._age();
    return this;
  }

  _age() {
    this.person.age =
      new Date().getFullYear() - new Date(this.person.dob).getFullYear();
  }
}

// * I can build object at one step
const person1 = new PersonBuilder().works
  .at("Contact")
  .job("Backend Developer")
  .lives.at("123 Baker street")
  .in("Giza")
  .profile.name("Mohamed Magdy")
  .born("2-12-1990")
  .build();
console.log(person1.toString());

// * I can built it by many builder in many postions
const person2 = new PersonBuilder().works
  .at("Contact")
  .job("Backend Developer")
  .build(); // to get person obj

// * passing obj by ref to builders
const profileBuilder = new PersonProfileBuilder(person2);
profileBuilder.profile.name("Mohamed Magdy").born("2-12-1990");

const addressBuilder = new PersonAddressBuilder(person2);
profileBuilder.lives.at("123 Baker street").in("Giza").build();

console.log(person2.toString());
