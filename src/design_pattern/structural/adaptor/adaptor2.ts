/**
 * Assume that demand of CUBE product is high
 * And I have 2 companies create cube A, B
 * both use different interface
 */

(() => {
  interface ICubeA {
    manufacture(width: number, height: number, depth: number): boolean;
  }
  interface ICubeB {
    create({
      top_left_front,
      bottom_right_back,
    }: {
      top_left_front: [number, number, number];
      bottom_right_back: [number, number, number];
    }): boolean;
  }

  class CubeA implements ICubeA {
    static lastTime = Date.now();

    manufacture(width: number, height: number, depth: number): boolean {
      console.log("🚩 Check Company A is available to create cube.");
      const now = Date.now();
      let success = false;

      if (now > CubeA.lastTime + 1500) {
        console.log(
          `✅ Company A manufacture [${width},${height},${depth}] cube.`
        );
        CubeA.lastTime = now;
        success = true;
      }

      return success;
    }
  }

  class CubeB implements ICubeB {
    static lastTime = Date.now();

    create({
      top_left_front,
      bottom_right_back,
    }: {
      top_left_front: number[];
      bottom_right_back: number[];
    }): boolean {
      console.log("🚩 Check Company B is available to create cube.");
      const now = Date.now();
      let success = false;

      if (now > CubeB.lastTime + 3000) {
        console.log(
          `✅ Company B create top_left_front:[${top_left_front[0]},${top_left_front[1]},${top_left_front[2]}], bottom_right_back:[${bottom_right_back[0]},${bottom_right_back[1]},${bottom_right_back[2]}] cube.`
        );
        CubeB.lastTime = now;
        success = true;
      }

      return success;
    }
  }

  class CubeBAdaptor implements ICubeA {
    #cubeB: ICubeB;
    constructor(cubeB: ICubeB) {
      this.#cubeB = cubeB;
    }

    manufacture(width: number, height: number, depth: number): boolean {
      return this.#cubeB.create({
        top_left_front: [0 - width / 2, 0 - height / 2, 0 - depth / 2],
        bottom_right_back: [0 + width / 2, 0 + height / 2, 0 + depth / 2],
      });
    }
  }

  //   client code

  let counter = 0;
  const demandedCube = 5;
  let now = new Date();

  const manufactureCube = () => {
    if (counter >= demandedCube) {
      clearInterval(manufactureInterval);
      return;
    }

    const cubeA = new CubeA();
    const width = 1;
    const height = 1;
    const depth = 1;

    let success = cubeA.manufacture(width, height, depth);
    if (success) {
      counter++;
    } else {
      console.log("⚠️ Company A Failed, try company B");

      const cubeB = new CubeB();
      success = new CubeBAdaptor(cubeB).manufacture(width, height, depth);
      success && counter++;
      !success && console.log("⚠️ Company B Failed, try company A");
    }

    now = new Date();
  };

  const manufactureInterval = setInterval(manufactureCube, 1000);
})();
