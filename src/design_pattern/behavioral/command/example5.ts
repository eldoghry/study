(() => {
  // receiver
  interface Player {
    movingUp(): void;
    movingDown(): void;
    movingLeft(): void;
    movingRight(): void;
  }

  class VideoGamePlayer implements Player {
    movingUp() {
      console.log("Moving Player UP.");
    }
    movingDown() {
      console.log("Moving Player DOWN.");
    }
    movingLeft() {
      console.log("Moving Player LEFT.");
    }
    movingRight() {
      console.log("Moving Player RIGHT.");
    }
  }

  //   commands
  interface Action {
    doAction(): void;
  }

  class ActionUp implements Action {
    private player: Player;

    constructor(player: Player) {
      this.player = player;
    }

    doAction(): void {
      this.player.movingUp();
    }
  }
  class ActionDown implements Action {
    private player: Player;

    constructor(player: Player) {
      this.player = player;
    }

    doAction(): void {
      this.player.movingDown();
    }
  }
  class ActionLeft implements Action {
    private player: Player;

    constructor(player: Player) {
      this.player = player;
    }

    doAction(): void {
      this.player.movingLeft();
    }
  }
  class ActionRight implements Action {
    private player: Player;

    constructor(player: Player) {
      this.player = player;
    }

    doAction(): void {
      this.player.movingRight();
    }
  }

  //invoker
  class Controller {
    private player: Player;
    private up: Action;
    private down: Action;
    private left: Action;
    private right: Action;

    constructor(player: Player) {
      this.player = player;
      this.up = new ActionUp(this.player);
      this.down = new ActionDown(this.player);
      this.left = new ActionLeft(this.player);
      this.right = new ActionRight(this.player);
    }

    UP() {
      this.up.doAction();
    }

    DOWN() {
      this.down.doAction();
    }

    RIGHT() {
      this.right.doAction();
    }

    LEFT() {
      this.left.doAction();
    }
  }

  //   client code
  const joyStick = new Controller(new VideoGamePlayer());
  joyStick.UP();
  joyStick.DOWN();
})();
