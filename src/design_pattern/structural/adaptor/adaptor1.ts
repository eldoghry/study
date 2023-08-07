/**
 * Adaptor pattern solve the following:
 * 1- how can a class be reused that does not have an interface that the client requires.
 * 2- how can classes that have incompatible interfaces work togather.
 * 3- how can an alternative interface be provided to class.
 *
 * Adaptor like decorator except that it change interface of object whereas the decorator adds responsibility
 * without changing the interface which allow also use decorator recursively.
 */

(() => {
  //   Target: Printer
  interface IPrinter {
    printMessage(msg: string): void;
  }

  class Printer implements IPrinter {
    printMessage(msg: string): void {
      console.log(`Modern Printer: ${msg}`);
    }
  }

  //   this old printer don't meet with target interface (no printMessage)
  class OldPrinter {
    print(msg: string): void {
      console.log(`Old Printer: ${msg}`);
    }
  }

  //   Adaptor: ModernPrinterAdapter
  class ModernPrinterAdapter extends Printer {
    #oldPrinter: OldPrinter; // wrapper the object
    constructor(oldPrinter: OldPrinter) {
      super();
      this.#oldPrinter = oldPrinter;
    }

    // re implement printMessage to meet Target IPrinter interface
    printMessage(msg: string): void {
      this.#oldPrinter.print(msg);
    }
  }

  //   client code
  [new Printer(), new ModernPrinterAdapter(new OldPrinter())].forEach(
    (printer: IPrinter) => printer.printMessage("message to print")
  );

  // Modern Printer: message to print
  // Old Printer: message to print
})();
