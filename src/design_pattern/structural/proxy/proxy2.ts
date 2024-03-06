(() => {
  interface IBankAccount {
    getBalance(): number;
  }

  class RealBankAccount implements IBankAccount {
    #balance: number;

    constructor(initialBalance: number) {
      this.#balance = initialBalance;
    }

    getBalance() {
      return this.#balance;
    }
  }

  class SecuredBankAccount implements IBankAccount {
    #balance: number;
    #realBankAccount: RealBankAccount | null = null;

    constructor(initialBalance: number) {
      this.#balance = initialBalance;
    }

    private _initializeRealBankAccount() {
      if (this.#realBankAccount === null) {
        console.log("load real bank once");
        this.#realBankAccount = new RealBankAccount(this.#balance);
      }
    }

    getBalance() {
      this._initializeRealBankAccount();
      return this.#realBankAccount!.getBalance();
    }
  }

  //  app client
  const secureAccount: IBankAccount = new SecuredBankAccount(5000);
  console.log(secureAccount.getBalance()); // oad real bank once, 5000
  console.log(secureAccount.getBalance()); // 5000
  console.log(secureAccount.getBalance()); // 5000
  console.log(secureAccount.getBalance()); // 5000
})();
