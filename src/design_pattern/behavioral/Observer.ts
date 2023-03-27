/**
 * Observer Pattern:
 * very useful when we want to optimize the communication between separate part of system
 * It promotes an integration of the parts without making then too coupled.
 * one(subject) to many (observers)
 */

// example 1
class Observer {
  private subject: Subject;
  private id: number;
  constructor(subject: Subject, id: number) {
    this.subject = subject;
    this.id = id;
  }

  update() {
    console.log(`Observer ${this.id} is fired`);
  }
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((ob) => {
      if (ob !== observer) return ob;
    });
  }

  fire() {
    this.observers.forEach((ob) => ob.update());
  }
}

const subject = new Subject();
const observer1 = new Observer(subject, 1);
const observer2 = new Observer(subject, 2);
const observer3 = new Observer(subject, 3);

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.unsubscribe(observer3);
subject.fire();

// example 2
// abstract class Subject {
//   observers: Observer[];

//   attach(observer: Observer) {
//     this.observers.push(observer);
//   }

//   detach(observer: Observer) {
//     this.observers.pop();
//   }

//   notifyObservers() {
//     this.observers.forEach((observer) => observer.update());
//   }
// }

// abstract class Observer {
//   subject: Subject;
//   update() {}
// }

// class Elifeha extends Subject {
//   state = "silent";

//   setState(state: string) {
//     this.state = state;
//   }

//   getState() {
//     return this.state;
//   }
// }

// class Player extends Observer {
//   constructor(subject: Subject) {
//     super();
//     this.subject = subject;
//   }

//   edrab() {}
// }
