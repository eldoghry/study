(() => {
  // Command Interface
  interface ICommand {
    execute(): void;
  }
  //  Receiver
  class Light {
    state: boolean;
    constructor() {
      this.state = false;
    }
    turnOn() {
      this.state = true;
      console.log("Light turned on");
    }
    turnOff() {
      this.state = false;
      console.log("Light turned off");
    }
  }
  // command 1
  class TurnLightOff implements ICommand {
    private light: Light;
    constructor(light: Light) {
      this.light = light;
    }
    execute() {
      this.light.turnOff();
    }
  }
  // command 1
  class TurnLightON implements ICommand {
    private light: Light;
    constructor(light: Light) {
      this.light = light;
    }
    execute() {
      this.light.turnOn();
    }
  }
  // Invoker
  class RemoteControl {
    private command: ICommand | null = null;
    setCommand(command: ICommand) {
      this.command = command;
    }
    pressButton() {
      if (this.command) this.command.execute();
      else console.log("No command set");
    }
  }
  //   client code
  const light = new Light();
  const turnLightOn = new TurnLightON(light);
  const turnLightOff = new TurnLightOff(light);
  const remoteControl = new RemoteControl();
  remoteControl.setCommand(turnLightOn);
  remoteControl.pressButton();
  remoteControl.setCommand(turnLightOff);
  remoteControl.pressButton();
})();
