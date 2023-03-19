abstract class Subject {
  observers: Observer[];

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    this.observers.pop();
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

abstract class Observer {
  subject: Subject;
  update() {}
}

class Elifeha extends Subject {
  state = "silent";

  setState(state: string) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Player extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
  }

  edrab() {}
}
