enum RequestType {
  CONFERENCE = "CONFERENCE",
  PURCHASE = "PURCHASE",
}

class IRequest {
  type: RequestType;
  amount: number;

  constructor(type: RequestType, amount: number) {
    this.type = type;
    this.amount = amount;
  }
}

abstract class Handler {
  private successor: Handler | null;

  constructor() {
    this.successor = null;
  }

  setSuccessor(successor: Handler) {
    this.successor = successor;
  }

  getSuccessor() {
    return this.successor;
  }

  public handleRequest(request: IRequest): void {}
}

class Director extends Handler {
  handleRequest(request: IRequest) {
    if (request.type === RequestType.CONFERENCE) {
      console.log(
        `Director will handle your request ->  ${request.type}:${request.amount}`
      );
    } else {
      this.getSuccessor()?.handleRequest(request);
    }
  }
}

class VP extends Handler {
  handleRequest(request: IRequest) {
    if (request.type === RequestType.PURCHASE && request.amount < 1500) {
      console.log(
        `VP will handle your request  ->  ${request.type}:${request.amount}`
      );
    } else {
      this.getSuccessor()?.handleRequest(request);
    }
  }
}

class CEO extends Handler {
  handleRequest(request: IRequest) {
    console.log(
      `CEO will handle your request  ->  ${request.type}:${request.amount}`
    );
  }
}

const mohamed = new Director();
const magdy = new VP();
const ali = new CEO();

mohamed.setSuccessor(magdy);
magdy.setSuccessor(ali);

const request1 = new IRequest(RequestType.CONFERENCE, 0);
const request2 = new IRequest(RequestType.PURCHASE, 500);
const request3 = new IRequest(RequestType.PURCHASE, 2000);

mohamed.handleRequest(request1);
mohamed.handleRequest(request2);
mohamed.handleRequest(request3);
