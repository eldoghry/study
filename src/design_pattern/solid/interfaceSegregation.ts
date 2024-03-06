/*
Interface Segregation Principle:

Segregation: mean keep things separated 
The principle states that many client-specific interfaces are better than one general-purpose interface. 
Clients should not be forced to implement a function they do no need.


split interface to many parts. client will not have to implement unnecessary logic 

example below we have MachineInterface that must implement print, scan, fax
in OldFashionPrinter only print is working why I should implement scan & fax



*/

interface MachineInterface {
  print(): void;
  scan(): void;
  fax(): void;
}

class MultiFunctionPrinter implements MachineInterface {
  print(): void {
    //
  }

  fax(): void {
    //
  }

  scan(): void {
    //
  }
}

class OldFashionPrinter implements MachineInterface {
  print(): void {
    //
  }

  fax(): void {
    // not need here
    throw new Error("Not Implemented");
  }

  scan(): void {
    // not need here
    throw new Error("Not Implemented");
  }
}

// this is better solution : seperate concerns in many interface
interface PrinterInterface {
  print(): void;
  // scan(): void;
  // fax(): void;
}

interface PrinterScannerInter extends PrinterInterface {
  scan(): void;
}

interface MultiFunctionPrinterInter extends PrinterScannerInter {
  fax(): void;
}

class GoodMultiFunctionPrinter implements MultiFunctionPrinterInter {
  print(): void {
    //
  }

  fax(): void {
    //
  }

  scan(): void {
    //
  }
}

class GoodOldFashionPrinter implements PrinterInterface {
  print(): void {
    //
  }

  // no need to implement scan, fax
}
