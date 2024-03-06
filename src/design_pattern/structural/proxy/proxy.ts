(() => {
  /**
   * Proxy is a structural design pattern that lets you provide a substitute or placeholder
   * for another object. A proxy controls access to the original object,
   * allowing you to perform something either before or after the request gets through to the original object.
   */

  interface IImage {
    filename: string;
    display(): void;
  }

  class RealImage implements IImage {
    filename: string;
    constructor(filename: string) {
      this.filename = filename;
      this.loadImageFromDisk();
    }

    display(): void {
      console.log(`Display image: ${this.filename}`);
    }

    loadImageFromDisk(): void {
      console.log(`Loading Image from disk: ${this.filename}`);
    }
  }

  class CashedImage implements IImage {
    filename: string;
    private image: RealImage | null = null;

    constructor(filename: string) {
      this.filename = filename;
    }

    display(): void {
      if (!this.image) {
        console.log("Cashed Image Once");
        this.image = new RealImage(this.filename);
      }

      this.image.display();
      console.log(`------------------------`);
    }
  }

  // client code
  const image1 = new CashedImage("image-1.jpg");
  const image2 = new CashedImage("image-2.jpg");

  image1.display(); //  RealImage will be loaded and displayed
  image1.display(); // RealImage will be displayed directly (no reload)
  image1.display(); // RealImage will be displayed directly (no reload)
  image1.display(); // RealImage will be displayed directly (no reload)

  image2.display(); // RealImage will be loaded and displayed
})();
