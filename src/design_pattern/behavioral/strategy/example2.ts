(() => {
  // interfaces
  interface ICarServiceStrategy {
    doMaintenance(): void;
  }

  class HondaServices implements ICarServiceStrategy {
    doMaintenance() {
      console.log("Do Honda Service Algorithm.");
    }
  }

  class SuzukiServices implements ICarServiceStrategy {
    doMaintenance() {
      console.log("Do Suzuki Service Algorithm.");
    }
  }

  class VolvoServices implements ICarServiceStrategy {
    doMaintenance() {
      console.log("Do Volvo Service Algorithm.");
    }
  }

  // context
  class CarServiceContext {
    service: ICarServiceStrategy;

    constructor(service: ICarServiceStrategy) {
      this.service = service;
    }

    setService(service: ICarServiceStrategy) {
      this.service = service;
      return this;
    }

    doService() {
      this.service.doMaintenance();
    }
  }

  // client code
  const honda = new HondaServices();
  const volvo = new VolvoServices();
  const suzuki = new SuzukiServices();

  const ctx = new CarServiceContext(honda);
  ctx.doService();
  ctx.setService(volvo).doService();
  ctx.setService(suzuki).doService();
})();
