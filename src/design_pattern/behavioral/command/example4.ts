(() => {
  // receiver
  class Stock {
    private quantity: number;
    private name: string;

    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }

    sell(quantity: number = 1) {
      if (quantity > this.quantity) {
        console.log(
          `Not enough stock of ${this.name} to sell ${quantity} units. Only ${this.quantity} units available.`
        );
      } else {
        this.quantity -= quantity;
        console.log(
          `${quantity} units of ${this.name} Sold. Remaining quantity is ${this.quantity} units.`
        );
      }
    }

    buy(quantity: number = 1) {
      this.quantity += quantity;
      console.log(
        `${quantity} units of ${this.name} Bought. Total quantity is now ${this.quantity} units.`
      );
    }
  }

  // commands
  interface Order {
    execute(): void;
  }

  class SellOrder implements Order {
    constructor(private stock: Stock) {}

    execute() {
      this.stock.sell();
    }
  }

  class BuyOrder implements Order {
    constructor(private stock: Stock) {}

    execute() {
      this.stock.buy();
    }
  }

  // invoker
  class Trader {
    private orderList: Order[] = [];
    addOrder(order: Order) {
      this.orderList.push(order);
    }

    placeOrder() {
      this.orderList.forEach((order) => {
        order.execute();
      });

      this.orderList = [];
    }
  }
  // client code

  const stock = new Stock("APPLE", 10);
  const sellOrder = new SellOrder(stock);
  const buyOrder = new BuyOrder(stock);

  const trader = new Trader();
  trader.addOrder(sellOrder);
  trader.addOrder(sellOrder);
  trader.addOrder(buyOrder);

  trader.placeOrder();
})();
