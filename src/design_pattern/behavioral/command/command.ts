/*
Client, Invoker, Reciever 
Idea: 
Assume that I have client class that have alot of responsibilty and I want to 
I lift a burden from doing some function, 
I will use invoker class and tell him to do some commands without know the implementation of it 
(encapsulation)

for example 
I have client that supposed to sendMoney to Reciever(s)
*/

interface CommandInterface {
  execute(...args: any): void;
}

abstract class Command implements CommandInterface {
  execute(...args: any): void {}
}

class Invoker {
  run(command: Command) {
    return command.execute();
  }
}

class Receiver {
  private id: number;
  private money = 0;

  constructor(id: number) {
    this.id = id;
  }

  sendMoney(money: number): void {
    this.money += money;
    console.log(`Receiver ${this.id} received ${money}, total:${this.money}`);
  }
}

class SendMoneyCommand extends Command {
  receiver: Receiver;

  constructor(receiver: Receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.sendMoney(500);
  }
}

class SendMoneyToAll extends Command {
  receivers: Receiver[];

  constructor(receivers: Receiver[]) {
    super();
    this.receivers = receivers;
  }

  execute() {
    this.receivers.forEach((receiver) => receiver.sendMoney(2000));
  }
}

const invoker = new Invoker();
const receiver0 = new Receiver(0);
const receiver1 = new Receiver(1);
const receiver2 = new Receiver(2);

invoker.run(new SendMoneyCommand(receiver0));
invoker.run(new SendMoneyCommand(receiver0));
invoker.run(new SendMoneyToAll([receiver0, receiver1, receiver2]));

// invoker.run(new SendMoneyCommand().execute(receiver1, 500));

// example 2
// type Order = {
//   order: string;
//   id: number;
// };

// class OrderManager {
//   orders: Order[] = [];

//   execute(command: Command, ...args: any) {
//     return command.execute(this.orders, ...args);
//   }
// }

// class Command {
//   execute: any;
//   constructor(execute: any) {
//     this.execute = execute;
//   }
// }

// // different command executers
// function PLaceOrderCommand(order: string, id: number) {
//   return new Command((orders: Order[]) => {
//     orders.push({ order, id });
//     console.log(`Place Order ${id}: ${order}`);
//   });
// }

// function CancelOrderCommand(id: number) {
//   return new Command((orders: Order[]) => {
//     orders = orders.filter((order) => order.id !== id);
//     console.log(`Canceling Order ${id}`);
//     return orders;
//   });
// }

// function TrackOrderCommand(id: number) {
//   return new Command(() => {
//     console.log(`Order ${id} will arrive after 20 min.`);
//   });
// }

// const manager = new OrderManager();

// // manager execute commands without knowing its implementation
// manager.execute(PLaceOrderCommand("Big tasty", 1));
// manager.execute(PLaceOrderCommand("Spicy Fish", 2));
// manager.execute(PLaceOrderCommand("Pizza Seafood", 3));
// manager.execute(CancelOrderCommand(2));
// manager.execute(TrackOrderCommand(1));
