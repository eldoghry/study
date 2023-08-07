(() => {
  interface IPayment {
    pay(money: number): void;
  }

  class PayWithCash implements IPayment {
    pay(money: number): void {
      console.log(`Pay $${money} with 💰CASH.`);
    }
  }

  class PayWithPayPal implements IPayment {
    pay(money: number): void {
      console.log(`Pay $${money} with  🅿️PAYPAL.`);
    }
  }

  class PayWithCard implements IPayment {
    pay(money: number): void {
      console.log(`Pay $${money} with 💳CARD.`);
    }
  }

  class PaymentMethodFactory {
    createPaymentMethod(method: string): IPayment {
      if (method === "card") {
        return new PayWithCard();
      } else if (method === "cash") {
        return new PayWithCash();
      } else if (method === "paypal") {
        return new PayWithPayPal();
      } else {
        throw new Error("Invalid or Unsupported Payment Method :(");
      }
    }
  }

  // * CLIENT CODE ---------------------------------------------------------

  let paymentMethod = new PaymentMethodFactory().createPaymentMethod("card");
  paymentMethod.pay(50);

  paymentMethod = new PaymentMethodFactory().createPaymentMethod("cash");
  paymentMethod.pay(150);

  paymentMethod = new PaymentMethodFactory().createPaymentMethod("paypal");
  paymentMethod.pay(10);

  paymentMethod = new PaymentMethodFactory().createPaymentMethod("fawry");
  //   paymentMethod.pay(150);
})();
