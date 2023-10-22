(() => {
  // component interface
  interface IWebService {
    request(): void;
  }

  // concrete components
  class SimpleWebService implements IWebService {
    request(): void {
      console.log("Simple Request");
    }
  }

  // Decorator (abstract class represent service decorator)
  abstract class ServiceDecorator implements IWebService {
    protected service: IWebService;
    constructor(service: IWebService) {
      this.service = service;
    }

    request(): void {
      return this.service.request();
    }
  }

  // Concrete Decorator (adding authentication to the web service)
  class AuthenticationDecorator extends ServiceDecorator {
    request(): void {
      this.authenticate();
      this.service.request();
    }

    authenticate(): void {
      console.log("Authenticating request...");
    }
  }

  // Concrete Decorator (adding logging to the web service)
  class LoggingDecorator extends ServiceDecorator {
    request(): void {
      this.logging();
      this.service.request();
    }

    logging(): void {
      console.log("Logging request...");
    }
  }

  function main() {
    let service = new SimpleWebService();
    service.request();
    console.log("-----------");

    service = new AuthenticationDecorator(service);
    service.request();
    console.log("-----------");

    service = new LoggingDecorator(service);
    service.request();

    console.log("-----------");
    new LoggingDecorator(new SimpleWebService()).request();
  }

  main();
})();
