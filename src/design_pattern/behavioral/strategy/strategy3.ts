(() => {
  // Strategy interface (PaymentStrategy)
  interface IPaymentStrategy {
    pay(amount: number): void;
  }

  // Concrete Strategies (payment methods)
  class CreditCardPayment implements IPaymentStrategy {
    private cardNumber: string;

    constructor(cardNumber: string) {
      this.cardNumber = cardNumber;
    }

    pay(amount: number) {
      console.log(
        `Paying by credit card for amount: ${amount}, Using Credit Card: ${this.cardNumber}`
      );
    }
  }

  class PaypalPayment implements IPaymentStrategy {
    private email: string;
    constructor(email: string) {
      this.email = email;
    }

    pay(amount: number) {
      console.log(
        `Paying by Paypal for amount: ${amount}, Using email: ${this.email}`
      );
    }
  }

  class BankTransfer implements IPaymentStrategy {
    private accountNum: string;
    constructor(accountNum: string) {
      this.accountNum = accountNum;
    }

    pay(amount: number) {
      console.log(
        `Paying by BankTransfer for amount: ${amount}, Using accountNum: ${this.accountNum}`
      );
    }
  }

  // Context (ShoppingCart)
  class ShoppingCart {
    paymentStrategy: IPaymentStrategy;
    items: { name: string; price: number }[] = [];

    constructor(paymentStrategy: IPaymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }

    addItem(item: { name: string; price: number }) {
      this.items.push(item);
    }

    calcTotal(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }

    checkout() {
      const total = this.calcTotal();
      this.paymentStrategy.pay(total);
      this.items = [];
    }
  }

  // client code
  const payWithCard = new CreditCardPayment("1234-1234-1234-1234");
  const payWithBankTransfer = new BankTransfer("xyz-123123123");
  const payWithPayPal = new PaypalPayment("moh.mag.ali@gmail.com");

  let cart = new ShoppingCart(payWithCard);

  cart.addItem({ name: "iPhone", price: 5000 });
  cart.addItem({ name: "charger", price: 250 });
  cart.addItem({ name: "mobile screen", price: 20 });
  cart.checkout();

  cart = new ShoppingCart(payWithPayPal);
  cart.addItem({ name: "iPhone", price: 5000 });
  cart.checkout();

  cart.paymentStrategy = payWithBankTransfer;
  cart.addItem({ name: "iPhone", price: 10000 });
  cart.checkout();
})();
