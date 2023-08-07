(() => {
  interface IVehicle {
    start(): void;
    stop(): void;
  }

  class Car implements IVehicle {
    start(): void {
      console.log("Car Started.");
    }

    stop(): void {
      console.log("Car Stop");
    }
  }

  class MotorCycle implements IVehicle {
    start(): void {
      console.log("MotorCycle Started.");
    }

    stop(): void {
      console.log("MotorCycle Stop");
    }
  }

  class Truck implements IVehicle {
    start(): void {
      console.log("Truck Started.");
    }

    stop(): void {
      console.log("Truck Stop");
    }
  }

  abstract class VehicleFactory {
    static createVehicle(method: string): IVehicle {
      if (method === "car") {
        return new Car();
      } else if (method === "motorCycle") {
        return new MotorCycle();
      } else if (method === "truck") {
        return new Truck();
      } else {
        throw new Error("Invalid vehicle type :(");
      }
    }
  }

  // * CLIENT CODE ---------------------------------------------------------

  let vehicle = VehicleFactory.createVehicle("car");
  vehicle.start();
  vehicle.stop();

  vehicle = VehicleFactory.createVehicle("truck");
  vehicle.start();
  vehicle.stop();

  vehicle = VehicleFactory.createVehicle("motorCycle");
  vehicle.start();
  vehicle.stop();
})();
